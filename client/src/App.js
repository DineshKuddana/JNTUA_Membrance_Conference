import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


// Dummy components for routing example

import Home from "../src/components/Home/home";
import About from "../src/components/About/about";
import Committees from "../src/components/Committee/committee";
import PaymentDetails from "../src/components/PaymentDetails/details"
import RegForm from "../src/components/Registration/registration"
import Admin from "../src/components/Admin/admin"

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/registration/process" element={<PaymentDetails />} />
        <Route path="/registration/form" element={<RegForm />} />
        
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
