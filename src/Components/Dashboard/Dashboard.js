import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "January",
    homeBill: 4000,
    phoneBill: 2400,
    extraBill: 2400,
  },
  {
    name: "February",
    homeBill: 3000,
    phoneBill: 1398,
    extraBill: 2210,
  },
  {
    name: "March",
    homeBill: 2000,
    phoneBill: 9800,
    extraBill: 2290,
  },
  {
    name: "April",
    homeBill: 2780,
    phoneBill: 3908,
    extraBill: 2000,
  },
  {
    name: "May",
    homeBill: 1890,
    phoneBill: 4800,
    extraBill: 2181,
  },
  {
    name: "June",
    homeBill: 2390,
    phoneBill: 3800,
    extraBill: 2500,
  },
  {
    name: "July",
    homeBill: 3490,
    phoneBill: 4300,
    extraBill: 2100,
  },
  {
    name: "Auguest",
    homeBill: 3490,
    phoneBill: 4300,
    extraBill: 2100,
  },
  {
    name: "September",
    homeBill: 3490,
    phoneBill: 4300,
    extraBill: 2100,
  },
  {
    name: "October",
    homeBill: 3490,
    phoneBill: 4300,
    extraBill: 2100,
  },
  {
    name: "November",
    homeBill: 3490,
    phoneBill: 4300,
    extraBill: 2100,
  },
  {
    name: "December",
    homeBill: 3490,
    phoneBill: 4300,
    extraBill: 2100,
  },
];

const Dashboard = () => {
  return (
    <>
      <div>
        <Container className="dashboard-title">
          <h1 className="mt-5 mb-3">Dashboard</h1>
          <hr></hr>
        </Container>

        <Container className="dashboard-cards mt-5 mb-5">
          <Card>
            <Card.Body>
              <Card.Title>Total Home Rent Bill in a month</Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Home Rent bill:{" "}
                  <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Total Phone Service & Recharge Bill</Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Phone Service & Recharge Bill:{" "}
                  <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Total Extra Bill</Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Extra bill: <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Total Food Bill in a month</Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Food bill: <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Total Cloths Bill in a month</Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Cloths bill: <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                Total Hair & Beard Cutting Bill in a month
              </Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Hair & Beard Cutting Bill:{" "}
                  <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Total Shoes Bill in a month</Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Shoes Bill: <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Total Others Bill in a month</Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Others Bill: <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <div className="main-dashboard">
        <Container className="overflow-scroll">
          <LineChart
            width={1300}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="homeBill"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="phoneBill" stroke="#f70000" />
            <Line type="monotone" dataKey="extraBill" stroke="#82ca9d" />
          </LineChart>
        </Container>
      </div>

      <Container>
        <Row>
          <Col lg={12} mb={12} sm={12}>
            <Card className="mt-5 mb-5 overflow-scroll">
              <Card.Body>
                <Card.Title>
                  <h3 className="mt-3 mb-5">
                    Home Service & Rent Bill Per Month
                  </h3>
                </Card.Title>
                <AreaChart
                  width={1250}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="homeBill"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={12} mb={12} sm={12} className="mt-5 mb-5">
            <Card className="overflow-scroll">
              <Card.Body>
                <Card.Title>
                  <h3 className="mt-3 mb-5">
                    Cell Phone Service & Recharge Bill Per Month
                  </h3>
                </Card.Title>
                <AreaChart
                  width={1250}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="phoneBill"
                    stroke="#f70000"
                    fill="#f70000"
                  />
                </AreaChart>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={12} mb={12} sm={12} className="mt-5 mb-5">
            <Card className="overflow-scroll">
              <Card.Body>
                <Card.Title>
                  <h3 className="mt-3 mb-5">Extra Bill Per Month</h3>
                </Card.Title>
                <AreaChart
                  width={1250}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="extraBill"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                </AreaChart>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
