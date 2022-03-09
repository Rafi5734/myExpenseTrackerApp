import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./calculator.css";
const Calculator = () => {
  return (
    <div>
      <Container>
        <h1 className="mt-5 mb-5">Expense Calculator</h1>
        <Container className="calculator-main mt-5 mb-5">
          <div>
            <>
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
            </>
            <Button variant="outline-dark">Submit</Button>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1200"
              className="w-100"
              alt="expense-img"
            ></img>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Calculator;
