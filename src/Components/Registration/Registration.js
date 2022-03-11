import React, { useState } from "react";
import {
  Alert,
  Button,
  Container,
  FloatingLabel,
  Form,
  Spinner,
} from "react-bootstrap";
import "./registration.css";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
const Registration = () => {
  const { registerUser, isLoading, user, error } = useFirebase();

  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [repassword, setRePassword] = useState({});

  //handle Registration button
  const handleRegistration = () => {
    if (password !== repassword) {
      alert("please enter the correct password.");
    }

    registerUser(email, password);
  };

  //handle full name
  const handleFullName = (e) => {
    setName(e.target.value);
  };

  //handle Email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //handle Password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //handle rePassword
  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };

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
          {!isLoading && (
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Full Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  onChange={handleFullName}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleEmail}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                className="mb-3"
                label="Password"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                className="mb-3"
                label="Retype password"
              >
                <Form.Control
                  type="password"
                  placeholder="Retype password"
                  onChange={handleRePasswordChange}
                />
              </FloatingLabel>
            </>
          )}

          {isLoading && <Spinner animation="border" />}

          <p>
            Already have an account? <Link to="/login">Login.</Link>
          </p>

          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={handleRegistration}
            id="liveToastBtn"
          >
            Register
          </button>

          {user.email && (
            <Alert variant="success">
              Successfully Registered a account✔✔✔
            </Alert>
          )}

          {error && (
            <Alert variant="danger" className="mt-5">
              {error}🐞🐞
            </Alert>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Registration;
