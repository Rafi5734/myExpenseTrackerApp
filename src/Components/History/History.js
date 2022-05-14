import React from "react";
import { Container, Table } from "react-bootstrap";
import "./history.css";
const History = () => {
  return (
    <div>
      <Container>
        <h1 className="history-title mb-3">History</h1>
        <hr></hr>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Bill Type</th>
              <th>Bill Purpose</th>
              <th>Bill Amount</th>
              <th>Time & Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Home Rent</td>
              <td>Food Bill</td>
              <td>2300</td>
              <td>5/12/2022 8:48AM</td>
            </tr>
          </tbody>
        </Table>

        <h1 className="mt-5 mb-5">
          Total Paid Amount: <span>0000$</span>
        </h1>
      </Container>
    </div>
  );
};

export default History;
