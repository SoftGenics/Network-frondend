import React from 'react'
import './dashboard.css'
import EventsLists from './EventsLists'
import {Container, Row, Col, Card} from 'react-bootstrap'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, BarChart } from 'recharts';
function Dashboard() {
  const data = [
    {
      name: 'Page A',
  
      membersship: 4000,
      amt: 1000,
    },
    {
      name: 'Page B',
      membersship: 3000,
      amt: 2000,
    },
    {
      name: 'Page C',

      membersship: 2000,
      amt: 3000,
    },
    {
      name: 'Page D',

      membersship: 1000,
      amt: 4000,
    },
    {
      name: 'Page E',

      membersship: 1100,
      amt: 4000,
    },
    
  ];
  const data1 = [

    {
      name: "Page A",
      Decrease: 4000,
      Increase: 2400,
      amt: 2500
    },
 
    {
      name: "Page B",
      Decrease: 3000,
      Increase: 1398,
      amt: 5000
    },
    {
      name: "Page C",
      Decrease: 2000,
      Increase: 9800,
      amt: 7500
    },
    {
      name: "Page C",
      Decrease: 2000,
      Increase: 9800,
      amt: 1000
    },
   
  ];
  return (
    <div className='admin-dashboard'>
      <Container>
      <div className='header-title'>
        Dashboard
      </div>
      {/* <div className='events-section'> */}
        <Row>
        {/* <div className='left-section'> */}
        <Col lg={7} sm={6}>
          {/* <span className='section-title'>Events</span>
          <div className='section-body'> */}
          <span className='section-title'>Events</span>
          <Card className='mt-4'>
            <Card.Body>
            <EventsLists />
            <EventsLists />
            <EventsLists />
            <EventsLists />
            <br></br>
            </Card.Body>
            </Card>
          {/* </div> */}
          </Col>
        {/* </div> */}
        <Col lg={5} sm={6}>
        {/* <div className='right-section'>
          <span className='section-title'>Membership</span>
          <div className='section-body'>
          </div>
        </div> */}
        <span className='section-title'>Membership</span>
     
        <ResponsiveContainer width="100%" height="86%" className='mt-4 bg-white' strokeDasharray  >
        <LineChart
          width={700}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            
            bottom: 5,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amt"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="membersship" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>    
        </Col>
        </Row>
      {/* </div> */}
      {/* <div className='membership-section'>
        <span className='section-title'>Membership Categories</span>
        <div className='section-container'>
          <div className='section-body'>

          </div>
          <div className='section-body'>

          </div>
          <div className='section-body'>

          </div>
        </div>
      </div> */}
      <Row>
      <span className='section-title mt-3 mb-3'>Membership Categories</span>
        <Col lg={4} sm={6}>
        <ResponsiveContainer width="100%" height="90%" className='mt-4 bg-white' strokeDasharray  >
        <BarChart
      width={500}
      height={300}
      data={data1}
      margin={{
        top: 5,
        right: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="amt" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Increase" fill="#5ACFCF" />
      <Bar dataKey="Decrease" fill="#E6E8EC" />
    </BarChart>
        </ResponsiveContainer>
        </Col>
        <Col lg={4} sm={6}>
        <ResponsiveContainer width="100%" height="90%" className='mt-4 bg-white' strokeDasharray  >
        <BarChart
      width={500}
      height={300}
      data={data1}
      margin={{
        top: 10,
        right: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="amt" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Increase" fill="#5ACFCF" />
      <Bar dataKey="Decrease" fill="#E6E8EC" />
    </BarChart>
        </ResponsiveContainer>
        </Col>
        <Col lg={4} sm={6}>
        <ResponsiveContainer width="100%" height="90%" className='mt-4 bg-white' strokeDasharray  >
        <BarChart
      width={500}
      height={300}
      data={data1}
      margin={{
        top: 5,
        right: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="amt" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Increase" fill="#5ACFCF" />
      <Bar dataKey="Decrease" fill="#E6E8EC" />
    </BarChart>
        </ResponsiveContainer>
      </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Dashboard