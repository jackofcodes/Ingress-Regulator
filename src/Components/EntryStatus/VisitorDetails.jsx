import React from 'react';

function VisitorDetails({ visitor }) {
  if (!visitor) {
    return <p>Select a visitor to view details.</p>;
  }

  return (
    <div className="visitor-details">
      <h2>{visitor.name}'s Details</h2>
      <p>Phone: {visitor.phone}</p>
      <p>Check-in Time: {visitor.checkinDateTime}</p>
    </div>
  );
}

export default VisitorDetails;