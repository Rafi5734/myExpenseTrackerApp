import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./calculator.css";
const Calculator = () => {
  const [homeBill, setHomeBill] = useState();
  return (
    <div>
      <Container>
        <Container className="calculator-title">
          <h1 className="mt-5 mb-3">Expense Calculator</h1>
          <hr></hr>
        </Container>

        <Row>
          <Col lg={6} mb={6} sm={12}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="number"
                placeholder="Home Bill"
              />
              <label htmlFor="floatingInputCustom">Home Bill</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="number"
                placeholder="Phone Bill"
              />
              <label htmlFor="floatingPasswordCustom">Phone Bill</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="number"
                placeholder="Extra Bill"
              />
              <label htmlFor="floatingPasswordCustom">Extra Bill</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="Time"
              />
              <label htmlFor="floatingPasswordCustom">Time</label>
            </Form.Floating>
            <Button variant="outline-dark">Submit</Button>
          </Col>
          <Col lg={6} mb={6} sm={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Calculator;
