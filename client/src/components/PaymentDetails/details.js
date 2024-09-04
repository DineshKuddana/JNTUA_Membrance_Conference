import React from 'react';

const PaymentDetails = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Payment Details</h2>

      <h3 style={subHeaderStyle}>Registration Fee</h3>

      <h4 style={subHeaderStyle}>Indian Delegates</h4>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Category</th>
            <th style={tableHeaderStyle}>For IMS Members</th>
            <th style={tableHeaderStyle}>Others</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableDataStyle}>P.G. / Ph.D. Students</td>
            <td style={tableDataStyle}>Rs. 1000</td>
            <td style={tableDataStyle}>Rs. 1500</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Faculty</td>
            <td style={tableDataStyle}>Rs. 2000</td>
            <td style={tableDataStyle}>Rs. 2500</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Industry</td>
            <td style={tableDataStyle}>Rs. 3000</td>
            <td style={tableDataStyle}>Rs. 3500</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Accompanying Persons</td>
            <td style={tableDataStyle} colSpan="2">Rs. 1000</td>
          </tr>
        </tbody>
      </table>

      <h4 style={subHeaderStyle}>International Delegates</h4>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Category</th>
            <th style={tableHeaderStyle}>Europe & North America</th>
            <th style={tableHeaderStyle}>Others</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableDataStyle}>Individuals</td>
            <td style={tableDataStyle}>$ 400</td>
            <td style={tableDataStyle}>$ 250</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Students</td>
            <td style={tableDataStyle}>$ 200</td>
            <td style={tableDataStyle}>$ 125</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Accompanying Persons</td>
            <td style={tableDataStyle} colSpan="2">$ 100</td>
          </tr>
        </tbody>
      </table>

      

      <h3 style={sectionHeaderStyle}>Mode of Payment:</h3>
      <p style={textStyle}>
        Registration fee can be paid online to the following account details:
        <br />
        <strong>Account Name:</strong> Chemical Engineering Association
        <br />
        <strong>Savings Bank Account No:</strong> 10428783377
        <br />
        <strong>Bank:</strong> State Bank of India
        <br />
        <strong>Branch:</strong> SBI, JNTUEC, Anantapur, Andhra Pradesh, India.
        <br />
        <strong>IFS Code:</strong> SBIN0002723
      </p>

      <h3 style={sectionHeaderStyle}>Corresponding Address</h3>
      <p style={textStyle}>
        Prof. Suggala V. Satyanarayana
        <br />
        Department of Chemical Engineering
        <br />
        JNTUA College of Engineering, Ananthapuramu - 515002, A.P., India.
        <br />
        <strong>Email:</strong> convener.mpge2024@gmail.com
        <br />
        <strong>Phone No:</strong> +91-9849501967 / 9247192692
      </p>
    </div>
  );
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  lineHeight: '1.6',
};

const headerStyle = {
  fontSize: '28px',
  color: '#2c3e50',
  marginBottom: '20px',
  textAlign: 'center',
};

const subHeaderStyle = {
  fontSize: '22px',
  color: '#2980b9',
  marginTop: '20px',
  marginBottom: '10px',
};

const sectionHeaderStyle = {
  fontSize: '20px',
  color: '#16a085',
  marginTop: '30px',
  marginBottom: '10px',
};

const textStyle = {
  fontSize: '16px',
  marginBottom: '20px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
  backgroundColor: '#ecf0f1',
};

const tableHeaderStyle = {
  backgroundColor: '#34495e',
  color: '#fff',
  padding: '10px',
  border: '1px solid #7f8c8d',
  textAlign: 'left',
};

const tableDataStyle = {
  padding: '10px',
  border: '1px solid #7f8c8d',
  textAlign: 'left',
  backgroundColor: '#f8f9fa',
};

export default PaymentDetails;
