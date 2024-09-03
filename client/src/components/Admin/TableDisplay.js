// TableDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TableDisplay.css'; // Add any specific styling for the table if needed

const TableDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://jntua-membrance-conference.onrender.com/get-files");
        if (result.data.status === "Ok") {
          setData(result.data.data);
        } else {
          alert("Error fetching data: " + result.data.status);
        }
      } catch (error) {
        alert("An unexpected error occurred: " + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-display">
      <h4 style={{ textAlign: "center", marginBottom: "20px" }}>Submitted Forms</h4>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Prefix</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Affiliation</th>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Postal Code</th>
            <th>Country</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Abstract Title</th>
            <th>Amount Paid</th>
            <th>Payment Mode</th>
            <th>Payment Reference ID</th>
            <th>Transaction Date</th>
            <th>Abstract File</th>
            <th>Bank Acknowledgement</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.prefix}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.designation}</td>
              <td>{item.department}</td>
              <td>{item.affiliation}</td>
              <td>{item.streetAddress}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.postalCode}</td>
              <td>{item.country}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.email}</td>
              <td>{item.abstractTitle}</td>
              <td>{item.amountPaid}</td>
              <td>{item.paymentMode}</td>
              <td>{item.paymentReferenceId}</td>
              <td>{item.transactionDate}</td>
              <td>
                {item.abstractFile ? (
                  <a href={`https://jntua-membrance-conference.onrender.com/files/${item.abstractFile}`} target="_blank" rel="noopener noreferrer">View</a>
                ) : (
                  "No File"
                )}
              </td>
              <td>
                {item.bankAcknowledgement ? (
                  <a href={`https://jntua-membrance-conference.onrender.com/files/${item.bankAcknowledgement}`} target="_blank" rel="noopener noreferrer">View</a>
                ) : (
                  "No File"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDisplay;
