import React from "react";
import { Card, Container } from "react-bootstrap";
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
    name: "Page A",
    homeBill: 4000,
    phoneBill: 2400,
    extraBill: 2400,
  },
  {
    name: "Page B",
    homeBill: 3000,
    phoneBill: 1398,
    extraBill: 2210,
  },
  {
    name: "Page C",
    homeBill: 2000,
    phoneBill: 9800,
    extraBill: 2290,
  },
  {
    name: "Page D",
    homeBill: 2780,
    phoneBill: 3908,
    extraBill: 2000,
  },
  {
    name: "Page E",
    homeBill: 1890,
    phoneBill: 4800,
    extraBill: 2181,
  },
  {
    name: "Page F",
    homeBill: 2390,
    phoneBill: 3800,
    extraBill: 2500,
  },
  {
    name: "Page G",
    homeBill: 3490,
    phoneBill: 4300,
    extraBill: 2100,
  },
];
const Dashboard = () => {
  return (
    <>
      <div>
        <div className="main-title container">
          <h1 className="mt-5 mb-5">Dashboard</h1>
        </div>

        <Container className="dashboard-cards mt-5 mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Total Home Bills</Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total home bill: <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Total Phone Bills</Card.Title>
              <Card.Text>
                <h1 className="text-muted">2</h1>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Phone bill: <span className="text-muted">0000$</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Total Extra Bills</Card.Title>
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
        </Container>
      </div>

      <div className="main-dashboard">
        <Container>
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

      <div className="main-per-bill">
        <Container className="mt-5 mb-5 graph-per-card">
          <Card style={{ width: "28rem" }}>
            <Card.Body>
              <Card.Title>
                <h3 className="mt-3 mb-5">Home Bill Per Month</h3>
              </Card.Title>
              <AreaChart
                width={420}
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

          <Card style={{ width: "28rem" }}>
            <Card.Body>
              <Card.Title>
                <h3 className="mt-3 mb-5">Phone Bill Per Month</h3>
              </Card.Title>
              <AreaChart
                width={420}
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

          <Card style={{ width: "28rem" }}>
            <Card.Body>
              <Card.Title>
                <h3 className="mt-3 mb-5">Extra Bill Per Month</h3>
              </Card.Title>
              <AreaChart
                width={420}
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
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
