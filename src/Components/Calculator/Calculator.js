import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./calculator.css";
const Calculator = () => {
  // time and date functionality
  var today = new Date();
  var date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();
  const [billType, setBillType] = useState();
  const [validated, setValidated] = useState(false);

  const [allValues, setAllValues] = useState({
    homeRentBill: "",
    foodBill: "",
    othersBill: "",
    phoneServiceBill: "",
    rechargeBill: "",
    clothsBill: "",
    hairBeardBill: "",
    shoesBill: "",
    time: date,
    status: "paid",
  });

  const handleValueChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    console.log(allValues);

    fetch("http://localhost:2000/calculator", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allValues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          window.confirm("Are you sure you want to calculate your expense?");
          console.log(data);
        }
      });
  };

  // bill type selector

  const handleBillTypeSelect = (e) => {
    const status = e.target.value;
    setBillType(status);
  };

  return (
    <div>
      <Container>
        <h5 className="type-selector">Bill Type</h5>
        <Form.Select
          aria-label="Default select example"
          className="w-50"
          onChange={handleBillTypeSelect}
        >
          <option>Select a Bill Type</option>
          <option value="homeBill">Home Bill</option>
          <option value="phoneBill">Phone Bill</option>
          <option value="extraBill">Extra Bill</option>
        </Form.Select>

        {billType !== "homeBill" &&
          billType !== "phoneBill" &&
          billType !== "extraBill" && (
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="mt-5"
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Home Rent Bill</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Home Rent Bill"
                    name="homeRentBill"
                    value={allValues.homeRentBill}
                    onChange={handleValueChange}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Food Bill</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Food Bill"
                    required
                    name="foodBill"
                    value={allValues.foodBill}
                    onChange={handleValueChange}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Others Bill</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Others Bill"
                    required
                    name="othersBill"
                    value={allValues.othersBill}
                    onChange={handleValueChange}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Time"
                    required
                    name="time"
                    value={date}
                    onChange={handleValueChange}
                    disabled
                  />
                </Form.Group>
              </Row>
              <Button type="submit">Calculate Bill</Button>
            </Form>
          )}
        {billType === "homeBill" && (
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mt-5"
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Home Bill</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Home Bill"
                  name="homeRentBill"
                  value={allValues.homeRentBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Food Bill</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Food Bill"
                  required
                  name="foodBill"
                  value={allValues.foodBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Others Bill</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Others Bill"
                  required
                  name="othersBill"
                  value={allValues.othersBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Time"
                  required
                  name="time"
                  value={date}
                  onChange={handleValueChange}
                  disabled
                />
              </Form.Group>
            </Row>
            <Button type="submit">Calculate Bill</Button>
          </Form>
        )}
        {billType === "phoneBill" && (
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mt-5"
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Service Bill</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Phone Service Bill"
                  name="phoneServiceBill"
                  value={allValues.phoneServiceBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Recharge Bill</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Food Bill"
                  required
                  name="rechargeBill"
                  value={allValues.rechargeBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Others Bill</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Others Bill"
                  required
                  name="othersBill"
                  value={allValues.othersBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Time"
                  required
                  name="time"
                  value={date}
                  onChange={handleValueChange}
                  disabled
                />
              </Form.Group>
            </Row>
            <Button type="submit">Calculate Bill</Button>
          </Form>
        )}
        {billType === "extraBill" && (
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mt-5"
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Cloths Bill</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Cloths Bill"
                  name="clothsBill"
                  value={allValues.clothsBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Hair & Beard Cut Bill</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Food Bill"
                  required
                  name="hairBeardBill"
                  value={allValues.hairBeardBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Shoes Bill</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Others Bill"
                  required
                  name="shoesBill"
                  value={allValues.shoesBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Others Bill</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Others Bill"
                  required
                  name="othersBill"
                  value={allValues.othersBill}
                  onChange={handleValueChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Time"
                  required
                  name="time"
                  value={date}
                  onChange={handleValueChange}
                  disabled
                />
              </Form.Group>
            </Row>
            <Button type="submit">Calculate Bill</Button>
          </Form>
        )}
      </Container>
    </div>
  );
};

export default Calculator;
