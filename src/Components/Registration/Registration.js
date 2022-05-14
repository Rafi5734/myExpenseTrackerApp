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
import { useNavigate } from "react-router-dom";
import RegistrationLogo from "../images/registration_logo.svg";

const Registration = () => {
  let navigate = useNavigate();

  const { registerUser, isLoading, user, error } = useFirebase();

  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [repassword, setRePassword] = useState({});

  //handle Registration button
  const handleRegistration = () => {
    if (password !== repassword) {
      alert("please enter the correct password.");
    }

    registerUser(email, password);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

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
      <Container className="registration-main mb-5">
        <div>
          <img
            src={RegistrationLogo}
            className="w-100 mt-5 img-fluid mt-5"
            alt="Registration-logo"
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
                  // onChange={handleFullName}
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

          {!isLoading && (
            <Button
              variant="outline-success"
              className="mt-5"
              onClick={handleRegistration}
            >
              Register
            </Button>
          )}

          {/* <button
            type="button"
            class="btn btn-outline-dark"
            onClick={handleRegistration}
            id="liveToastBtn"
          >
            Register
          </button> */}

          {user.email && (
            <Alert variant="success" className="mt-5">
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
