import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import './user.css'

//import db from '../../services/firebase.js'

const User = () => {

    const initialFormState = {
        name: "",
        cell: "",
        email: "",
        password: ""
      };
      const [form, setForm] = useState(initialFormState);
    
      function onSave(event) {
    
        event.preventDefault(); //It is necessary to avoid charge all webpage clicking Submit
        console.log("This is the form", form)
    
        // const resp = addDoc(collection(db, 'booking'), form)
        //   .then(resp => alert("Booking saved"))
        //    console.log("Saved info", resp)
           setForm(initialFormState); //Empty form after sending to firebase
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
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name='name' value={form.name} onChange={onChange} placeholder="Type your full name" /><br />
                <Form.Label>Cellphone</Form.Label>
                <Form.Control type="text" name='cell' value={form.cell} onChange={onChange} placeholder="Type your Cellphone" /><br />
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={form.email} onChange={onChange} placeholder="Type your email" /><br />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={form.password} onChange={onChange} placeholder="Type your password" /><br />
                <Form.Text className='text-muted'>
                  Your information won´t be shared or re-used
                </Form.Text>
                <Button variant="danger" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </>
  );
}

export default User;