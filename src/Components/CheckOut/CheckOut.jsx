import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CheckOut.css'; // Import your CSS file
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import API_URL from '../../config';

const CheckOut = () => {
  const [showModal, setShowModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleEnterPasscode = async () => {
    try {
      // Make a POST request to the backend to update checkout time
      const response = await axios.put(`${API_URL}/api/visitors/checkout`, {
        phoneNumber: phoneNumber,
        passcode: passcode
      });

      // If the request is successful, set the checkout message
      setCheckoutMessage(response.data.message);
      alert("The visitor was chekedout Successfully");
      console.log(response);
      // Close the modal
      handleCloseModal();
    } catch (error) {
      // Handle errors
      console.error('Error checking out:', error.response.data.message);
      // Set an error message or handle errors in another way
    }
  };

  const handleScanQR = () => {
    // Add logic to open camera for QR code scanning
    // Perform checkout based on the scanned QR code
  };

  return (
    <div className='full_check'>
      <Navbar />
      <div className="container out_disp">
        <div className='conti'>
          <h1 className="title">Checkout Page</h1>
          <div className="buttons-container">
            <Button variant="primary" onClick={handleShowModal} className="button">Enter Passcode</Button>
            <Button variant="primary" onClick={handleScanQR} className="button">Scan QR Code</Button>
            <Link to="/admin-landing"><Button variant="primary" className="button" to>Admin Page</Button></Link>
          </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Passcode and Phone Number</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <input type="text" placeholder="Passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)} />
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="secondary" onClick={handleCloseModal} className="button">Close</Button>
            <Button variant="primary" onClick={handleEnterPasscode} className="button">Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
      {checkoutMessage && <p>{checkoutMessage}</p>}
    </div>
  );
}

export default CheckOut;
