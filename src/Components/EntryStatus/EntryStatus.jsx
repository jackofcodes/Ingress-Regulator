import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Offcanvas, Nav } from 'react-bootstrap';
import axios from 'axios';
import './EntryStatus.css';
import Navbar from '../Navbar/Navbar';
import API_URL from '../../config';
import { Link } from 'react-router-dom';

const EntryStatus = () => {
  const [visitorsData, setVisitorsData] = useState([]);
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [activeTab, setActiveTab] = useState('Active');

  useEffect(() => {
    // Fetch visitor data from backend when component mounts
    const fetchVisitors = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/visitors/all`);
        setVisitorsData(response.data);
      } catch (error) {
        console.error('Error fetching visitors:', error);
      }
    };

    fetchVisitors();
  }, []);

  const handleVisitorClick = (visitor) => {
    setSelectedVisitor(visitor);
  };

  const handleManualCheckout = async () => {
    try {
      const response = await axios.put(`${API_URL}/api/visitors/manual-checkout`, { name: selectedVisitor.name });
      
      console.log(response.data.message);
      // Assuming the backend handles updating visitor data
      // Alert that the checkout was successful
      alert("Checkout successful!");
      // Reload the page to reflect the updated data
      window.location.reload();
    } catch (error) {
      console.error('Error checking out visitor:', error);
      // Handle error if needed
      alert("Error occurred during checkout. Please try again later.");
    }
  };

  // Filter visitors who are active (checked out = false) or in history (checked out = true)
  const activeVisitors = visitorsData.filter(visitor => !visitor.checkedOut);
  const historyVisitors = visitorsData.filter(visitor => visitor.checkedOut);

  return (
    <div>
      <Navbar />
      <div className='maxi'>
        <Container fluid>
          <Row className='ma'>
            <Col sm={3} className="sidebar">
              <div className='sidecontent'>
                <h2>Sidebar</h2>
                <Nav variant="tabs" defaultActiveKey="Active" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                  <Nav.Item>
                    <Nav.Link eventKey="Active">Active Visitors</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="History">History</Nav.Link>
                  </Nav.Item>
                  
                  <Link to = '/admin-landing'><Button className='back-but' variant="primary" >Go back</Button></Link>
                  
                </Nav>
                {activeTab === 'History' && (
                  <ul>
                    
                  </ul>
                )}
              </div>
            </Col>
            <Col sm={9}>
              <div className='visitorcontent'>
                <h2>{activeTab === 'Active' ? 'Active Visitors' : 'History'}</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Checked In Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(activeTab === 'Active' ? activeVisitors : historyVisitors).map(visitor => (
                      <tr key={visitor.id} onClick={() => handleVisitorClick(visitor)}>
                        <td>{visitor.name}</td>
                        <td>{visitor.phoneNumber}</td>
                        <td>{visitor.checkInTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>

          <Offcanvas show={selectedVisitor !== null} onHide={() => setSelectedVisitor(null)} placement="bottom" style={{ height: '500px' }}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Visitor Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {selectedVisitor && (
                <div>
                  <h2>{selectedVisitor.name}</h2>
                  <p><strong>Phone Number:</strong> {selectedVisitor.phoneNumber}</p>
                  <p><strong>Checked In Time:</strong> {selectedVisitor.checkInTime}</p>
                  <p><strong>Email:</strong> {selectedVisitor.email}</p>
                  <p><strong>Address:</strong> {selectedVisitor.address}</p>
                  <p><strong>Purpose Of Visit:</strong> {selectedVisitor.purposeOfVisit}</p>
                  {activeTab === 'Active' && (
                    <div>
                      <p><strong>Check Out Time:</strong> {selectedVisitor.checkOutTime}</p>
                      <Button variant="danger" onClick={handleManualCheckout}>Manual Checkout</Button>
                    </div>
                  )}
                </div>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
        
      </div>
    </div>
  );
};

export default EntryStatus;
