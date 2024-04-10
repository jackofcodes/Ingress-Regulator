import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Navbar from '../Navbar/Navbar';
import './Visitor.css';
import API_URL from '../../config'

const NewVisitorPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '', // New email field
    address: '',
    purposeOfVisit: '',
    VisitorCheckOutTime: '',
    phoneNumber: '',
    otp: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSendOTP = async () => {
    try {
      // Send request to backend to generate and send OTP to the provided mobile number
      const response = await axios.post(`${API_URL}/api/visitors/capture-details`, {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        purposeOfVisit: formData.purposeOfVisit,
        phoneNumber: formData.phoneNumber,
        VisitorCheckOutTime: formData.VisitorCheckOutTime,
      });
      console.log(response.data); // Log response from backend
      alert('OTP sent successfully.'); // Alert for successful OTP send
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      // Send entire form data to backend
      const response = await axios.post(`${API_URL}/api/visitors/saveDetails`, formData);
      console.log(response.data); // Log response from backend
      alert('Visitor Welcome to the premises.'); // Alert for successful form submission
      // Redirect to admin landing page
      navigate('/admin-landing');
      // Reset form after successful submission
      setFormData({
        name: '',
        age: '',
        email: '', // Reset email field
        address: '',
        purposeOfVisit: '',
        expectedCheckOutTime: '',
        phoneNumber: '',
        otp: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="cont">
        <h1>New Visitor Form</h1>
        <Form onSubmit={handleSubmit}>
          <Row className='py-1'>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
          </Row>
          <Row className='py-1'>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group as={Col} controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} required />
            </Form.Group>
          </Row>
          <Row className='py-1'>
            <Form.Group as={Col} controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
            </Form.Group>
          </Row>
          <Row className='py-1'>
            <Form.Group as={Col} controlId="purposeOfVisit">
              <Form.Label>purpose Of Visit</Form.Label>
              <Form.Control as="textarea" rows={3} name="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleChange} required />
            </Form.Group>
          </Row>
          <Row className='py-1'>
            <Form.Group as={Col} controlId="VisitorCheckOutTime">
              <Form.Label>Checkout Date and Time</Form.Label>
              <Form.Control type="datetime-local" name="VisitorCheckOutTime" value={formData.VisitorCheckOutTime} onChange={handleChange} required />
            </Form.Group>
          </Row>
          <Row className="mb-3 py-1">
            <Form.Group as={Col} controlId="phoneNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </Form.Group>
            <Button as={Col} className='opt-but' variant="primary" onClick={handleSendOTP}>
              Send OTP
            </Button>
          </Row>
          <Row className="mb-3 py-1">
            <Form.Group as={Col} controlId="otp">
              <Form.Label>OTP</Form.Label>
              <Form.Control type="text" name="otp" value={formData.otp} onChange={handleChange} required />
            </Form.Group>
            <Button type="submit" as={Col} className='opt-but' variant="primary" onClick={handleSubmit}>Verify and Submit</Button>

          </Row>
        </Form>
      </div>
    </div>
  );
};

export default NewVisitorPage;
