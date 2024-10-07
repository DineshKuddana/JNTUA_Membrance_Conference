import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TableDisplay.css'; // Custom CSS for styling

const TableDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://jntua-membrance-conference.onrender.com/get-files");
        if (result.data.status === "Ok") {
          setData(result.data.data);
        } else {
          setError("Error fetching data: " + result.data.status);
        }
      } catch (error) {
        setError("An unexpected error occurred: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      try {
        const response = await axios.delete(`https://jntua-membrance-conference.onrender.com/delete-file/${id}`);
        if (response.data.status === "Ok") {
          // Remove the deleted item from the state
          setData((prevData) => prevData.filter(item => item._id !== id));
          alert("Record deleted successfully.");
        } else {
          alert("Failed to delete the record: " + response.data.message);
        }
      } catch (error) {
        console.error("Error deleting data: ", error);
        alert("Failed to delete the record. Please try again.");
      }
    }
  };

  if (loading) {
    return <p>Loading data, please wait...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="21" style={{ textAlign: "center" }}>No data available.</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item._id}>
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
                <td>
                  <button onClick={() => handleDelete(item._id)}>Delete</button> {/* Delete button */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableDisplay;
