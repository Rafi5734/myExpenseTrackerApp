import React from "react";
import { Container, Table } from "react-bootstrap";
import "./history.css";
const History = () => {
  return (
    <div>
      <Container>
        <h1 className="mt-5 mb-5">History</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Bill Type</th>
              <th>Paid Bill</th>
              <th>Time & Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
              </Table>
              
              <h1 className="mt-5 mb-5">Total Paid Amount: <span>0000$</span></h1>
      </Container>
    </div>
  );
};

export default History;
