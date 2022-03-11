import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import NavImg from "../images/logo-name.png";
const NavigationBar = () => {

    const { user, logOut } = useFirebase();

    console.log(user);
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <Link to="/home">
              <img src="https://see.fontimg.com/api/renderfont4/3zRBM/eyJyIjoiZnMiLCJoIjo3MywidyI6MTAwMCwiZnMiOjczLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RXhwZW5zZSB0cmFja2Vy/attack-graffiti.png" alt="nab-logo" className="nav-img"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/home" className="me-3">
                Home
              </Link>
              <Link to="/history" className="me-3">
                History
              </Link>
              <Link to="/dashboard" className="me-3">
                Dashboard
              </Link>
              <Link to="/calculator" className="me-3">
                Calculator
              </Link>
            </Nav>

            
            {user?.email ? (
                <Form className="d-flex">
                  <Button variant="outline-success" onClick={logOut}>
                      SignOut
                  </Button>{" "}
                </Form>
              ) : (
                <Form className="d-flex">
                  <Button variant="outline-success">
                    <Link to="/login" className="me-3">
                      SignIn
                    </Link>
                  </Button>{" "}
                </Form>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
