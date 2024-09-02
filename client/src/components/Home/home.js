import React from 'react';
import collegeImage from '../../images/jntua.webp'; 
import collegeLogo from '../../images/logo.png'; 
import './home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Conference Details Section */}
      <section className="conference-details">
        <h1 className="conference-title">International Conference on</h1>
        <h2 className="conference-subtitle">
          “Membrane Processes for a Green Environment: Current Status, Challenges, and Future Prospects”
        </h2>
        <p className="conference-date">16 - 18 October 2024</p>
        <p className="conference-location">Ananthapuramu, Andhra Pradesh, India</p>
      </section>

      {/* About the Conference Section */}
      <section className="about-conference">
        <h3 className="section-title">About the Conference:</h3>
        <p>
          The Indian Membrane Society organizes this conference annually to commemorate the Birth Anniversary of Prof. S. Sourirajan, a pioneer in Phase Inversion Membranes. This year, the event will take place at JNTUA, Anantapur, focusing on “Membrane Processes for a Green Environment: Current Status, Challenges, and Future Prospects.” The conference will offer a comprehensive look into membrane technologies and their role in sustainable development.
        </p>
      </section>

      {/* College Image and Download Button Section */}
      <section className="image-section">
        <img src={collegeImage} alt="College" className="college-image" />
        <a href="https://drive.google.com/file/d/12Vg7hGdVfyxxXUnNaw8Sp0UE3UL9RXzk/view?usp=sharing" target='_blank'  rel = "noreferrer" className="download-button" download>
          Download Brochure
        </a>
      </section>

      {/* Topics Section */}
      <section className="topics">
        <h3 className="section-title">Topics:</h3>
        <div className="topics-table">
          <div className="topic">
            <h4>Separation Technologies</h4>
            <p>Challenges and opportunities in Separation Technologies.</p>
          </div>
          <div className="topic">
            <h4>Fuel Cells and Energy</h4>
            <p>Membrane for fuel cell and energy application.</p>
          </div>
          <div className="topic">
            <h4>Novel Materials</h4>
            <p>Aspects of novel materials for membrane technology.</p>
          </div>
          <div className="topic">
            <h4>Water Treatment</h4>
            <p>Emerging technologies for water and wastewater treatment.</p>
          </div>
          <div className="topic">
            <h4>Environmental Engineering</h4>
            <p>Environmental engineering for sustainable development.</p>
          </div>
          <div className="topic">
            <h4>Biological Inventions</h4>
            <p>Biological inventions and technologies for a green environment.</p>
          </div>
          <div className="topic">
            <h4>Clean Technologies</h4>
            <p>Clean and green technologies for air and water pollution.</p>
          </div>
          <div className="topic">
            <h4>Bio-Membranes</h4>
            <p>Bio-membranes, nanomaterials, nano composites, and nano-technology.</p>
          </div>
          <div className="topic">
            <h4>Desalination</h4>
            <p>Desalination and membrane distillation.</p>
          </div>
          <div className="topic">
            <h4>Membrane Modification</h4>
            <p>Membrane modification and characterization for green environment.</p>
          </div>
          <div className="topic">
            <h4>Molecular Dynamics</h4>
            <p>Molecular dynamics, modelling, and simulation.</p>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="important-dates">
        <h3 className="section-title">Important Dates:</h3>
        <table className="dates-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Last Date for Submission of Paper</td>
              <td>21st September 2024</td>
            </tr>
            <tr>
              <td>Communication of Acceptance of Paper</td>
              <td>28th September 2024</td>
            </tr>
            <tr>
              <td>Last Date for Payment of Registration / Accommodation</td>
              <td>04th October 2024</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Organizers Info Section */}
      <section className="organizers-info">
        <h3 className="section-title">Joint Organizers:</h3>
        <div className="organizers-cards">
          <div className="organizer-card">
            <h4>Indian Membrane Society</h4>
            <p>Baroda, India</p>
            <a href="http://www.indianmembranesociety.org" target="_blank" rel="noopener noreferrer">
              www.indianmembranesociety.org
            </a>
          </div>
          <div className="organizer-card">
            <h4>Department of Chemical Engineering</h4><br></br>
            <p>JNTUA College of Engineering <br></br>Ananthapuramu, India</p>
          </div>

          <div className="address-card">
            <img src={collegeLogo} alt="College Logo" className="college-logo" />
            <p>JNTUA College of Engineering Ananthapuramu,<br></br>Andhra Pradesh, India - 515002</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} JNTUA College of Engineering. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
