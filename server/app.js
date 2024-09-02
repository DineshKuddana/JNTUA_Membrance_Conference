const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require('path');
const app = express();

require('dotenv').config();


// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/files', express.static(path.join(__dirname, 'files')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Database"))
  .catch((e) => console.log("Error connecting to MongoDB: ", e));

// Define storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Mongoose Schema
const PdfDetailsSchema = new mongoose.Schema({
  prefix: String,
  firstName: String,
  lastName: String,
  gender: String,
  designation: String,
  department: String,
  affiliation: String,
  streetAddress: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  mobileNumber: String,
  email: String,
  abstractTitle: String,
  amountPaid: String,
  paymentMode: String,
  paymentReferenceId: String,
  transactionDate: String,
  abstractFile: String,
  bankAcknowledgement: String,
}, { collection: "PdfDetails" });

const PdfSchema = mongoose.model("PdfDetails", PdfDetailsSchema);

// API to upload files and data
app.post("/upload-files", upload.fields([{ name: 'abstractFile' }, { name: 'bankAcknowledgement' }]), async (req, res) => {
  const formData = {
    prefix: req.body.prefix,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    designation: req.body.designation,
    department: req.body.department,
    affiliation: req.body.affiliation,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    postalCode: req.body.postalCode,
    country: req.body.country,
    mobileNumber: req.body.mobileNumber,
    email: req.body.email,
    abstractTitle: req.body.abstractTitle,
    amountPaid: req.body.amountPaid,
    paymentMode: req.body.paymentMode,
    paymentReferenceId: req.body.paymentReferenceId,
    transactionDate: req.body.transactionDate,
    abstractFile: req.files['abstractFile'] ? req.files['abstractFile'][0].filename : null,
    bankAcknowledgement: req.files['bankAcknowledgement'] ? req.files['bankAcknowledgement'][0].filename : null,
  };

  try {
    await PdfSchema.create(formData);
    res.send({ status: "Ok" });
  } catch (error) {
    res.status(500).json({ status: error.message });
  }
});

// API to fetch all uploaded files
app.get("/get-files", async (req, res) => {
  try {
    const data = await PdfSchema.find({});
    res.send({ status: "Ok", data });
  } catch (error) {
    res.status(500).json({ status: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
