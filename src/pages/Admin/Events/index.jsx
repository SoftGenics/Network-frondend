import React from 'react'
import {Container, Card, Row, Button, Col, Image} from 'react-bootstrap';
import EventImg from '../../../assets/admin-images/event.png';
import freeEventImg from '../../../assets/admin-images/freeevent.png'
import paideventImg from '../../../assets/admin-images/paidevent.png'
import paidevent1Img from '../../../assets/admin-images/paidevent1.png'
import './Event.css'
function index() {
  return (
    <div className='event'>
      <Container>
      <div className='header-title'>
        Events
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col md={6} className="d-flex justify-content-center">
              <Image src={EventImg} />
            </Col>
            <Col md={6} className="create-events">
              <h4 className='mt-3 fw-bold'>Change Events</h4>
              <Button className='mt-3' size='sm'>Create New Events</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row className='mt-5'>
        <Col md={4}>
          <Card>
            <Card.Img src={freeEventImg} />
            <Card.Body>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img src={paideventImg} />
            <Card.Body>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img src={paidevent1Img} />
            <Card.Body>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default index