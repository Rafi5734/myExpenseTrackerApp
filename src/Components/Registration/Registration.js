import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import "./registration.css";
import { Link } from "react-router-dom";
const Registration = () => {

  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [repassword, setRePassword] = useState({});
  //handle Registration button

  const handleRegistration = () => {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(repassword);
  };


  //handle full name
  const handleFullName = (e) => {
    setName(e.target.value)
  }

  //handle Email
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  //handle Password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  //handle rePassword
  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value)
  }

  return (
    <div>
      <Container className="registration-main mt-5 mb-5">
        <div>
          <img
            src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="register-img"
            className="w-100 mt-5"
          ></img>
        </div>
        <div>
          <h1 className="text-center mt-5 mb-5">Register your account</h1>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Full Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Full Name" onChange={handleFullName}/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Email" onChange={handleEmail}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              className="mb-3"
              label="Password"
            >
              <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              className="mb-3"
              label="Retype password"
            >
              <Form.Control type="password" placeholder="Retype password" onChange={handleRePasswordChange}/>
            </FloatingLabel>
          </>
          <p>
            Already have an account? <Link to="/login">Login.</Link>
          </p>
          <Button variant="outline-dark" onClick={handleRegistration}>Register</Button>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
