import React from 'react';
import '../PaymentDetails/details.css'
const Sponsors = () => {
  return (
    <div style={containerStyle}>
      

      <h3 style={sectionHeaderStyle}>SOUVENIR:</h3>
      <p style={textStyle}>
        We plan to bring out a souvenir on this occasion and request support in the form of sponsorship/advertisements.
      </p>

      <h3 style={sectionHeaderStyle}>Exhibition:</h3>
      <p style={textStyle}>
        An exhibition of the latest in membrane technologies and related areas is also being planned where a table space of 10’ X 10’ will be provided for companies/individuals who wish to exhibit their products. The charges for this would be Rs. 10,000/-.
      </p>

      <h3 style={sectionHeaderStyle}>Sponsorship Packages:</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Sponsor</th>
            <th style={tableHeaderStyle}>Benefits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableDataStyle}>Platinum sponsor Rs. 5,00,000</td>
            <td style={tableDataStyle}>5 complimentary registrations, slot for invited talk, and back cover page advertisement</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Gold sponsor Rs. 3,00,000</td>
            <td style={tableDataStyle}>3 complimentary registrations, slot for invited talk, and 1 inside cover page color advertisement</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Silver sponsor Rs. 2,00,000</td>
            <td style={tableDataStyle}>2 complimentary registrations, 1 page advertisement in the souvenir, & slot for invited talk</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Bronze sponsor Rs. 1,00,000</td>
            <td style={tableDataStyle}>1 complimentary registration, 1 page advertisement in the souvenir, & slot for invited talk</td>
          </tr>
        </tbody>
      </table>

      <h3 style={sectionHeaderStyle}>Advertisement Tariffs:</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Advertisement</th>
            <th style={tableHeaderStyle}>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableDataStyle}>Full page</td>
            <td style={tableDataStyle}>Rs. 20,000</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Half page</td>
            <td style={tableDataStyle}>Rs. 12,500</td>
          </tr>
          <tr>
            <td style={tableDataStyle}>Quarter Page</td>
            <td style={tableDataStyle}>Rs. 7,500</td>
          </tr>
        </tbody>
      </table>

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

export default Sponsors;
