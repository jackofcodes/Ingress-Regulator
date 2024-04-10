import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import check_out from '../../images/c_out2.jpg';
import check_status from '../../images/c_s.jpg';
import new_entry from '../../images/vis.jpg';

const Admin = () => {
  return (
    <div className='admin-landing-page'>
      <Navbar />
      <Container className="main-style">
      <h1 className="page-heading">Welcome Admin!!</h1>
        <div className="button-container">
          <Row>
            <Col sm={4}>
              <Card style={{ margin: '20px' }}>
                <Card.Img variant="top" src={new_entry} />
                <Card.Body>
                  <Card.Title>New Visitor</Card.Title>
                  <Card.Text>
                  Effortlessly welcome new guests with our intuitive visitor registration system, ensuring a seamless experience from entry to exit.
                  </Card.Text>
                  <Link to="/admin-landing/new-visitor">
                    <Button className="but-color">Add New Visitor</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card style={{ margin: '20px' }}>
                <Card.Img variant="top" src={check_out} />
                <Card.Body>
                  <Card.Title>Checkout Existing</Card.Title>
                  <Card.Text>
                  Ensure a smooth departure for your guests with our convenient checkout feature, enhancing security and leaving a lasting positive impression.
                  </Card.Text>
                  <Link to="/admin-landing/checkout">
                    <Button className="but-color">Go To CheckOut</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card style={{ margin: '20px' }}>
                <Card.Img variant="top" src={check_status} />
                <Card.Body>
                  <Card.Title>Visitor Status</Card.Title>
                  <Card.Text>
                  Monitor visitor movements effortlessly with our advanced status tracking system, ensuring optimal security and efficient management of your premises.
                  </Card.Text>
                  <Link to="/admin-landing/entry-status">
                    <Button className="but-color">All Visitors</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Admin;
