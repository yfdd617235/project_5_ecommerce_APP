import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import './signUp.css'

//import db from '../../services/firebase.js'

const LogIn = () => {

    const initialFormState = {
        email: "",
        password: ""
      };
      const [form, setForm] = useState(initialFormState);
    
      async function onSave(event) {
        event.preventDefault(); //It is necessary to avoid charge all webpage clicking Submit (use this always for submit events)
        console.log("This is the form", form)

        //call the endpoint of our webpage
        await fetch('http://localhost:3001/auth/logIn', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then(res => res.json()).then(result => console.log(result));

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
              <Form className='form-Booking'onSubmit={onSave}>
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