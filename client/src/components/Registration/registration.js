import { useState, useEffect } from "react";
import axios from "axios";
import "./registration.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [activeTab, setActiveTab] = useState("form");
  const [data, setData] = useState([]);
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

  useEffect(() => {
    if (activeTab === "display") {
      fetchData();
    }
  }, [activeTab]);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files");
      if (result.data.status === "Ok") {
        setData(result.data.data);
      } else {
        alert("Error fetching data: " + result.data.status);
      }
    } catch (error) {
      alert("An unexpected error occurred: " + error.message);
    }
  };

  const handleFormChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(formState).forEach((key) => {
      formData.append(key, formState[key]);
    });

    try {
      const result = await axios.post("http://localhost:5000/upload-files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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
      alert("An unexpected error occurred: " + error.message);
    }
  };

  const renderForm = () => (
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
          <input type="file" name="abstractFile" onChange={handleFormChange} style={{ margin: "8px 0" }} />
        </div>

        {/* Bank Acknowledgement */}
        <div>
          <label>Bank Acknowledgement:</label>
          <input type="file" name="bankAcknowledgement" onChange={handleFormChange} style={{ margin: "8px 0" }} />
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );

  const renderTable = () => (
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
                  <a href={`http://localhost:5000/files/${item.abstractFile}`} target="_blank" rel="noopener noreferrer">View</a>
                ) : (
                  "No File"
                )}
              </td>
              <td>
                {item.bankAcknowledgement ? (
                  <a href={`http://localhost:5000/files/${item.bankAcknowledgement}`} target="_blank" rel="noopener noreferrer">View</a>
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
  
  return (
    <div className="App">
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("form")} style={{ padding: "10px 20px", margin: "0 5px", borderRadius: "4px", border: "none", backgroundColor: "#007bff", color: "#fff" }}>
          Form
        </button>
        <button onClick={() => setActiveTab("display")} style={{ padding: "10px 20px", margin: "0 5px", borderRadius: "4px", border: "none", backgroundColor: "#007bff", color: "#fff" }}>
          Display
        </button>
      </nav>
      {activeTab === "form" ? renderForm() : renderTable()}
    </div>
  );
}

export default App;
