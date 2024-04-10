import React from 'react'

const VisitorList = ({ visitors, onVisitorSelect }) => {
  return (
    <div className="visitor-list">
    <h2>Patient List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Check-in Time</th>
        </tr>
      </thead>
      <tbody>
        {visitors.map((visitor) => (
          <tr
            key={visitor.id}
            onClick={() => onVisitorSelect(visitor)}
            className="visitor-item"
          >
            <td>{visitor.name}</td>
            <td>{visitor.phone}</td>
            <td>{visitor.checkinDateTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default VisitorList