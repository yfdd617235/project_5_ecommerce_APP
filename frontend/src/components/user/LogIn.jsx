import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signUp.css'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom'



//import db from '../../services/firebase.js'

const LogIn = () => {
  //Declare the values and functions to be used of context
  const {user, saveToken} = useContext(UserContext)
  const navigate = useNavigate()

  const initialFormState = {
    email: "",
    password: ""
  };
  const [form, setForm] = useState(initialFormState);

  async function onSave(event) {
    event.preventDefault(); //It is necessary to avoid charge all webpage clicking Submit (use this always for submit events)
    //console.log("This is the form", form)

    //call the endpoint of our webpage
    await fetch('http://localhost:3001/auth/logIn', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(result => {
      toast.success('User Logged!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
      //Function Context to save the token
      console.log(result.token)
      saveToken(result.token)
      navigate("/Products")
    });

    setForm(initialFormState); //Empty form after sending
  }

  function onChange(event) {
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className='wrap'>
        <div className='formContent'>
          <div className='Column'>
            <Form className='form-Booking' onSubmit={onSave}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' value={form.email} onChange={onChange} placeholder="Type your email" /><br />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' value={form.password} onChange={onChange} placeholder="Type your password" /><br />
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="Colored"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default LogIn;