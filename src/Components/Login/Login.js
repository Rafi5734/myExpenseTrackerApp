import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import "./login.css";
import LoginSvg from "../images/undraw_secure_login_pdn4.svg";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Login = () => {

  const { user } = useAuth();
  console.log(user);

  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  //handle login button
  const handleLogin = () => {
    console.log("login");
    console.log(email, password);
  };

  //handle email input field
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  //handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div>
      <Container className="login-main mt-5 mb-5">
        <div className="w-100">
          <img src={LoginSvg} alt="login-svg"></img>
        </div>
        <div className="login-in-functionality">
          <h1 className="login-title">Login into the account</h1>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 w-100 mt-5"
          >
            <Form.Control type="email" placeholder="name@example.com" onChange={handleEmailChange}/>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            className="mb-3 w-100"
            label="Password"
          >
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
          </FloatingLabel>
          <div className="check">
            <Form.Check aria-label="option 1" />
            <span className="ms-3">Allow all terms and conditions?</span>
          </div>
          <p className="mt-3">
            If you have no account, please
            <Link to="/registration" className="ms-1">
              Register.
            </Link>
          </p>
          <Button
            variant="outline-success"
            className="mt-5"
            onClick={handleLogin}
          >
            Login
          </Button>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Login;
