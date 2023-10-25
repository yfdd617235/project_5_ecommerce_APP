import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signUp.css'

//import db from '../../services/firebase.js'

const SignUp = () => {

  const initialFormState = {
    name: "",
    LastName: "",
    phone: "",
    email: "",
    password: ""
  };
  const [form, setForm] = useState(initialFormState);

  async function onSave(event) {

    event.preventDefault(); //It is necessary to avoid charge all webpage clicking Submit
    console.log("This is the form", form)

    //call the endpoint of our webpage
    await fetch('http://localhost:3001/auth/SignUp', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    }).then(res => res.json()).then(result => toast.success('User Successfully registered!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }));

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
            <Form className='form-Booking' onSubmit={onSave}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' value={form.name} onChange={onChange} placeholder="Type your name" /><br />
              <Form.Label>LastName</Form.Label>
              <Form.Control type="text" name='LastName' value={form.LastName} onChange={onChange} placeholder="Type your LastName" /><br />
              <Form.Label>Cellphone</Form.Label>
              <Form.Control type="text" name='phone' value={form.phone} onChange={onChange} placeholder="Type your Cellphone" /><br />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' value={form.email} onChange={onChange} placeholder="Type your email" /><br />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' value={form.password} onChange={onChange} placeholder="Type your password" /><br />
              <Form.Label className='text'>
                Your information won´t be shared or re-used
              </Form.Label>
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

export default SignUp;