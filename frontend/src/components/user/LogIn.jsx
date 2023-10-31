import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signUp.css';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const { user, saveToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: '',
    email: ''
  });

  async function onSave(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/auth/logIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('User Logged!', {
          position: 'top-right',
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        });
        saveToken(result.token);
        navigate('/Profile');
      } else {
        throw new Error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
    }
  }

  function onChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    if (user.token) {
      navigate('/Profile');
    }
  }, [user.token, navigate]);

  return (
    <>
      <div className="wrap">
        <div className="formContent">
          <div className="Column">
            <Form className="form-Booking" onSubmit={onSave}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={onChange} placeholder="Type your email" /><br />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={form.password} onChange={onChange} placeholder="Type your password" /><br />
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
