import React from "react";
import { Badge, Card, Container } from "react-bootstrap";
import "./home.css";
const Home = () => {
  return (
    <div className="mt-5 mb-5">

          
          {/* Home bill */}


      <Container>
        <Card className="Home-bill mt-5 mb-5">
          <h3 className="mb-5 mt-5">Home Bill</h3>
          <p>
            <strong>Home bill: </strong>
            <span>0000$</span>
          </p>
          <p>
            <strong>Paid bill: </strong>
            <span>0000$</span>
          </p>
          <p>
            <strong>Status: </strong>
            <Badge bg="success">Paid</Badge>
          </p>
          <p>
            <strong>Time: </strong>
            <span>3/08/2022; 10:46PM</span>
          </p>
        </Card>
          </Container>
          

          {/* Mobile bill */}

          
      <Container>
        <Card className="Home-bill mt-5 mb-5">
          <h3 className="mb-5 mt-5">Mobile Bill</h3>
          <p>
            <strong>Mobile bill: </strong>
            <span>0000$</span>
          </p>
          <p className="mb-5">
            <strong>Paid bill: </strong>
            <span>0000$</span>
          </p>
          {/* <p>
            <strong>Received bill: </strong>
            <span>0000$</span>
          </p>
          <p>
            <strong>Time: </strong>
            <span>3/08/2022; 10:46PM</span>
          </p> */}
        </Card>
          </Container>
          

          {/* Extra bill */}

          
      <Container>
        <Card className="Home-bill mt-5 mb-5">
          <h3 className="mb-5 mt-5">Extra Bill</h3>
          <p>
            <strong>Extra bill: </strong>
            <span>0000$</span>
          </p>
          <p>
            <strong>Paid bill: </strong>
            <span>0000$</span>
          </p>
          <p>
            <strong>Time: </strong>
            <span>3/08/2022; 10:46PM</span>
          </p>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
