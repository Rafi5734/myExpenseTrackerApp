import React, { useState } from "react";
import {
  Alert,
  Button,
  Container,
  FloatingLabel,
  Form,
  Spinner,
} from "react-bootstrap";
import "./login.css";
import LoginSvg from "../images/undraw_secure_login_pdn4.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  // const [locationFrom, setLocationFrom] = useState("");

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // setLocationFrom(from);

  const { user, signInUser, isLoading, error } = useFirebase();

  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  //handle login button
  const handleLogin = () => {
    signInUser(email, password);
    // navigate(from);
    setTimeout(() => {
      navigate(from);
    }, 1000);
  };

  //handle email input field
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <Container className="login-main mb-5">
        <div className="w-100">
          <img src={LoginSvg} alt="login-svg" className="img-fluid mt-5"></img>
        </div>

        <div className="login-in-functionality">
          <>
            <h1 className="login-title">Login into the account</h1>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 w-100 mt-5"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={handleEmailChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              className="mb-3 w-100"
              label="Password"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
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
            {isLoading && <Spinner animation="border" />}
            {!isLoading && (
              <Button
                variant="outline-success"
                className="mt-5"
                onClick={handleLogin}
              >
                Login
              </Button>
            )}
            {user.email && (
              <Alert variant="success" className="mt-5">
                Successfully Login your account✔✔✔
              </Alert>
            )}
            {error && (
              <Alert variant="danger" className="mt-5">
                {error}🐞🐞
              </Alert>
            )}
          </>
        </div>
      </Container>
    </div>
  );
};

export default Login;
