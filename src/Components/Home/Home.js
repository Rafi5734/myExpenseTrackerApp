import React from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import "./home.css";
const Home = () => {
  return (
    <div className="mt-5 mb-5">
      {/* Home bill */}

      <Container>
        <Card className="home-bill mb-5">
          <Card.Header as="h1">Home Service & Rent Bill</Card.Header>
          <Card.Body>
            <Row>
              <Col lg={4} mb={6} sm={12} className="mb-3">
                <Card body>
                  <p>
                    <strong>Home bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Food bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Others bill: </strong>
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
              </Col>
              <Col lg={4} mb={6} sm={12} className="mb-3">
                <Card body>
                  <p>
                    <strong>Home bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Food bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Others bill: </strong>
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
              </Col>
              <Col lg={4} mb={6} sm={12} className="mb-3">
                <Card body>
                  <p>
                    <strong>Home bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Food bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Others bill: </strong>
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
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      {/* Mobile bill */}

      <Container>
        <Card className="mb-5">
          <Card.Header as="h1">Cell Phone Service & Recharge Bill</Card.Header>
          <Card.Body>
            <Row>
              <Col lg={4} mb={6} sm={12}>
                <Card body>
                  <p>
                    <strong>Service bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Recharge bill: </strong>
                    <span>0000$</span>
                  </p>

                  <p>
                    <strong>Time: </strong>
                    <span>3/08/2022; 10:46PM</span>
                  </p>
                </Card>
              </Col>
              <Col lg={4} mb={6} sm={12}>
                {/* <Card body>
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
                </Card> */}
              </Col>
              <Col lg={4} mb={6} sm={12}>
                {/* <Card body>
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
                </Card> */}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      {/* Extra bill */}

      <Container>
        <Card className="mb-5">
          <Card.Header as="h1">Extra Bill</Card.Header>
          <Card.Body>
            <Row>
              <Col lg={4} mb={6} sm={12}>
                <Card body>
                  <p>
                    <strong>Cloths bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Hair & Beard Cutting bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Shoes bill: </strong>
                    <span>0000$</span>
                  </p>
                  <p>
                    <strong>Others bill: </strong>
                    <span>0000$</span>
                  </p>

                  <p>
                    <strong>Time: </strong>
                    <span>3/08/2022; 10:46PM</span>
                  </p>
                </Card>
              </Col>
              <Col lg={4} mb={6} sm={12}>
                {/* <Card body>
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
                </Card> */}
              </Col>
              <Col lg={4} mb={6} sm={12}>
                {/* <Card body>
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
                </Card> */}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
