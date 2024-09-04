import React from "react";
import "../Committee/committee.css";

const local = () => {
  return (
    <div className="committee-container">
      <h2 className="section-title">Committees</h2>

      

      <div className="committee-section">
        <h3 className="committee-title">
          Local Organizing Committee @ JNTUA CE Ananthapuramu
        </h3>
        <table className="committee-table">
          <tbody>
            <tr>
              <td>Prof. T. Balanarsaiah</td>
              <td>Dr. S. Sharada</td>
            </tr>
            <tr>
              <td>Mr. M. Kalyan Kumar</td>
              <td>Mrs. A. Meenakshi</td>
            </tr>
            <tr>
              <td>Mr. K. Subba Rao</td>
              <td>Dr. M. Murali Naik</td>
            </tr>
            <tr>
              <td>Dr. P. Uma Maheshwari</td>
              <td>Dr. A. Rajasekhar Babu</td>
            </tr>
            <tr>
              <td>Dr. K. Peddintaiah</td>
              <td>Mrs. D. Sowjanya</td>
            </tr>
            <tr>
              <td>Mrs. H. Rehana Anjum</td>
              <td>Mrs. Ch. Maneesha</td>
            </tr>
            <tr>
              <td>Mr. D. Manjunath</td>
              <td>Ms. G. Sameena</td>
            </tr>
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default local;
