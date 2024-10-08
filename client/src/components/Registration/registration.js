import { useState } from "react";
import axios from "axios";
import "./registration.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error messages

  const handleFormChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const validateFiles = () => {
    const { abstractFile, bankAcknowledgement } = formState;
    const allowedAbstractFormats = ["application/pdf"];
    const allowedBankFormats = ["image/jpeg", "image/jpg"];
    const maxFileSize = 1 * 1024 * 1024; // 1 MB in bytes

    // Validate Abstract File
    if (abstractFile && !allowedAbstractFormats.includes(abstractFile.type)) {
      return "Abstract file must be a PDF.";
    }
    if (abstractFile && abstractFile.size > maxFileSize) {
      return "Abstract file must be less than 1 MB.";
    }

    // Validate Bank Acknowledgement
    if (bankAcknowledgement && !allowedBankFormats.includes(bankAcknowledgement.type)) {
      return "Bank acknowledgement file must be a JPG or JPEG.";
    }
    if (bankAcknowledgement && bankAcknowledgement.size > maxFileSize) {
      return "Bank acknowledgement file must be less than 1 MB.";
    }

    return null; // No errors
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const validationError = validateFiles();
    if (validationError) {
      setErrorMessage(validationError);
      return; // Stop submission if validation fails
    }

    setIsSubmitting(true); // Disable submit button

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
        setErrorMessage(""); // Clear any previous error messages
      } else {
        alert("Error submitting form: " + result.data.status);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred: " + error.message);
    } finally {
      setIsSubmitting(false); // Enable submit button after submission
    }
  };

  return (
    <div className="App">
      <form className="formStyle" onSubmit={submitForm} style={{ color: "#333", backgroundColor: "#f7f9fc", padding: "20px", borderRadius: "8px", boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
        <h4 style={{ textAlign: "center", marginBottom: "20px" }}>Registration Form</h4>
        
        {/* Display Error Message */}
        {errorMessage && <div style={{ color: "#dc3545", fontWeight: "bold", marginBottom: "20px" }}>{errorMessage}</div>}

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

        {/* Contact Fields */}
        <div>
          <label>Mobile Number:</label>
          <input type="text" name="mobileNumber" required value={formState.mobileNumber} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" required value={formState.email} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Abstract Title */}
        <div>
          <label>Abstract Title:</label>
          <input type="text" name="abstractTitle" required value={formState.abstractTitle} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* Payment Fields */}
        <div>
          <label>Amount Paid:</label>
          <input type="number" name="amountPaid" required value={formState.amountPaid} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        <div>
          <label>Payment Mode:</label>
          <input type="text" name="paymentMode" required value={formState.paymentMode} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        <div>
          <label>Payment Reference ID:</label>
          <input type="text" name="paymentReferenceId" required value={formState.paymentReferenceId} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        <div>
          <label>Transaction Date:</label>
          <input type="date" name="transactionDate" required value={formState.transactionDate} onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} />
        </div>

        {/* File Uploads */}
        <div>
          <label>Upload Abstract File (PDF):</label>
          <input type="file" name="abstractFile" accept=".pdf" onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} required />
        </div>

        <div>
          <label>Upload Bank Acknowledgement (JPEG):</label>
          <input type="file" name="bankAcknowledgement" accept=".jpg, .jpeg" onChange={handleFormChange} style={{ padding: "8px", margin: "8px 0", borderRadius: "4px" }} required />
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: "center" }}>
          <button type="submit" disabled={isSubmitting} style={{ padding: "10px 20px", borderRadius: "4px", backgroundColor: "#007bff", color: "white", border: "none", cursor: isSubmitting ? "not-allowed" : "pointer" }}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <img src="/qr.png" alt="QRimage" className="qr-image" />
    </div>
  );
}

export default App;
