import { useState } from "react";
import axios from "axios";
import "./registration.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import qrImage from '../../images/qr.png';

function App() {
  const [formState, setFormState] = useState({
    prefix: "",
    firstName: "",
    lastName: "",
    gender: "",
    designation: "",
    department: "",
    affiliation: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    mobileNumber: "",
    email: "",
    abstractTitle: "",
    amountPaid: "",
    paymentMode: "",
    paymentReferenceId: "",
    transactionDate: "",
    abstractFile: null,
    bankAcknowledgement: null,
  });

  const handleFormChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Create FormData instance
    const formData = new FormData();
    Object.keys(formState).forEach((key) => {
      formData.append(key, formState[key]);
    });

    try {
      console.log("Submitting form data:", formData);
      const result = await axios.post("https://jntua-membrance-conference.onrender.com/upload-files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response data:", result.data);

      if (result.data.status === "Ok") {
        alert("Form submitted successfully!");
        setFormState({
          prefix: "",
          firstName: "",
          lastName: "",
          gender: "",
          designation: "",
          department: "",
          affiliation: "",
          streetAddress: "",
          city: "",
          state: "",
          postalCode: "",
          country: "India",
          mobileNumber: "",
          email: "",
          abstractTitle: "",
          amountPaid: "",
          paymentMode: "",
          paymentReferenceId: "",
          transactionDate: "",
          abstractFile: null,
          bankAcknowledgement: null,
        });
        document.querySelector(".formStyle").reset();
      } else {
        alert("Error submitting form: " + result.data.status);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred: " + error.message);
    }
  };

  return (
    <div className="App">
      <form className="formStyle" onSubmit={submitForm} style={{ color: "#333", backgroundColor: "#f7f9fc", padding: "20px", borderRadius: "8px", boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
        <h4 style={{ textAlign: "center", marginBottom: "20px" }}>Registration Form</h4>

        {/* Prefix Dropdown */}
        <div>
          <label>Prefix:</label>
          <select name="prefix" value={formState.prefix} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }}>
            <option value="">Select Prefix</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
          </select>
        </div>

        {/* First Name */}
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" required value={formState.firstName} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" required value={formState.lastName} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Gender Radio Buttons */}
        <div className="gender-group">
          <label>Gender:</label>
          <label>
            <input type="radio" name="gender" value="Male" checked={formState.gender === "Male"} onChange={handleFormChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" checked={formState.gender === "Female"} onChange={handleFormChange} />
            Female
          </label>
          <label>
            <input type="radio" name="gender" value="Other" checked={formState.gender === "Other"} onChange={handleFormChange} />
            Other
          </label>
        </div>

        {/* Designation */}
        <div>
          <label>Designation:</label>
          <input type="text" name="designation" required value={formState.designation} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Department */}
        <div>
          <label>Department:</label>
          <input type="text" name="department" required value={formState.department} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Affiliation */}
        <div>
          <label>Affiliation:</label>
          <input type="text" name="affiliation" required value={formState.affiliation} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Address Fields */}
        <div>
          <label>Street Address:</label>
          <input type="text" name="streetAddress" required value={formState.streetAddress} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        <div>
          <label>City:</label>
          <input type="text" name="city" required value={formState.city} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        <div>
          <label>State:</label>
          <input type="text" name="state" required value={formState.state} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        <div>
          <label>Postal Code:</label>
          <input type="text" name="postalCode" required value={formState.postalCode} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        <div>
          <label>Country:</label>
          <input type="text" name="country" readOnly value={formState.country} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Mobile Number */}
        <div>
          <label>Mobile Number:</label>
          <input type="text" name="mobileNumber" required value={formState.mobileNumber} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input type="email" name="email" required value={formState.email} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Abstract Title */}
        <div>
          <label>Abstract Title:</label>
          <input type="text" name="abstractTitle" required value={formState.abstractTitle} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Amount Paid */}
        <div>
          <label>Amount Paid:</label>
          <input type="text" name="amountPaid" required value={formState.amountPaid} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Payment Mode */}
        <div>
          <label>Payment Mode:</label>
          <input type="text" name="paymentMode" required value={formState.paymentMode} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Payment Reference ID */}
        <div>
          <label>Payment Reference ID:</label>
          <input type="text" name="paymentReferenceId" required value={formState.paymentReferenceId} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Transaction Date */}
        <div>
          <label>Transaction Date:</label>
          <input type="date" name="transactionDate" required value={formState.transactionDate} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Abstract File */}
        <div>
          <label>Abstract File:</label>
          <input type="file" name="abstractFile" onChange={handleFormChange} required style={{ padding: "8px", margin: "8px 0" }} />
        </div>

        {/* Bank Acknowledgement */}
        <div>
          <label>Bank Acknowledgement:</label>
          <input type="file" name="bankAcknowledgement" onChange={handleFormChange} required style={{ padding: "8px", margin: "8px 0" }} />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "4px" }}>Submit</button>
        </div>

        {/* Instructions */}
        <div style={{ marginTop: "20px", color: "#dc3545", fontWeight: "bold" }}>
          <p>Please note the following before submitting the form:</p>
          <ul>
            <li>The <strong>Bank Acknowledgement</strong> file should be in <strong>.jpg</strong> or <strong>.jpeg</strong> format and the file size should be less than <strong>1 MB</strong>.</li>
            <li>The <strong>Abstract File</strong> should be in <strong>.pdf</strong> format and the file size should be less than <strong>1 MB</strong>.</li>
            <li>Files that do not meet the specified formats or size limits may not be processed correctly, even if the form is submitted.</li>
          </ul>
        </div>

        
      </form>
      <img src="/qr.png" alt="QRimage" className="qr-image" />

    </div>
    
  );
}

export default App;
