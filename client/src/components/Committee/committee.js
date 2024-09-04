import React from "react";
import "./committee.css";

const Committee = () => {
  return (
    <div className="committee-container">
      <h2 className="section-title">Committees</h2>

      <div className="committee-section">
        <h3 className="committee-title">Executive Committee</h3>
        <div className="executive-member">
            <h4>Chairman</h4>
            <p>Prof. H. Sudarsana Rao</p>
            <p>Vice-Chancellor i/c, JNTUA Ananthapuramu</p>
          </div>
        <div className="executive-committee">
          
          <div className="executive-member">
            <h4>Patron</h4>
            <p>Prof. S. Krishnaiah</p>
            <p>Registrar, JNTUA Ananthapuramu</p>
          </div>
          <div className="executive-member">
            <h4>Co-Patron</h4>
            <p>Prof. P. Chenna Reddy</p>
            <p>Principal, JNTUA College of Engineering Ananthapuramu</p>
          </div>
          <div className="executive-member">
            <h4>Convener</h4>
            <p>Prof. S.V. Satyanarayana</p>
            <p>Director, Academic & Planning, JNTUA Ananthapuramu</p>
          </div>
          <div className="executive-member">
            <h4>Co-Convener</h4>
            <p>Prof. B. Dilip Kumar</p>
            <p>HOD of Chemical Engineering, JNTUA CEA, Ananthapuramu</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Committee;
