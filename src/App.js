import "./App.css";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import History from "./Components/History/History";
import Dashboard from "./Components/Dashboard/Dashboard";
import Calculator from "./Components/Calculator/Calculator";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import NavImg from "./Components/images/budget.png";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
// import useAuth from "./Hooks/useAuth";
function App() {
  // const { user, logOut } = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="#">
              <Link to="/home">
                <img src={NavImg} alt="nab-img" className="nav-img"></img>
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

              <Form className="d-flex">
                  <Button variant="outline-success">
                    <Link to="/" className="me-3">
                      SignIn
                    </Link>
                  </Button>{" "}
                </Form>
              {/* {user?.email ? (
                <Form className="d-flex">
                  <Button variant="outline-success" onClick={logOut}>
                      SignOut
                  </Button>{" "}
                </Form>
              ) : (
                <Form className="d-flex">
                  <Button variant="outline-success">
                    <Link to="/" className="me-3">
                      SignIn
                    </Link>
                  </Button>{" "}
                </Form>
              )} */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="history" element={<History />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
