import React, { useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signUp.css'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';



//import db from '../../services/firebase.js'

function LogIn() {
  //Declare the values and functions to be used of context
  const {user, saveToken} = useContext(UserContext)
  const navigate = useNavigate() //to navegate between pages afer login
  //This will save the values of the form
  const [form, setForm] = useState({
    password: '',
    email: ''
  })

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
      autoClose: 3500,
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
      navigate("/Profile")
    });

  }

  function onChange(event) {
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  useEffect(() =>{
    if(user.token){
      navigate("/Profile")
    }
  })

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
    </>
  );
}

export default LogIn;