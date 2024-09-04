import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing components
import Home from "../src/components/Home/home";
import About from "../src/components/About/about";
import Committees from "../src/components/Committee/committee";
import PaymentDetails from "../src/components/PaymentDetails/details";
import RegForm from "../src/components/Registration/registration";
import AdminLogin from "../src/components/Admin/AdminLogin";
import AdminConsole from "../src/components/Admin/AdminConsole";
import NAC from '../src/components/NAC/nac'
import Local from '../src/components/Local/local';
import Sponsors from '../src/components/Sponsors/sponsors';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    const correctUsername = 'admin';
    const correctPassword = 'password123'; // Set your admin credentials

    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

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
        <Route path="/committee/nac" element={<NAC />} />
        <Route path="/committee/local" element={<Local />} />
        <Route path="/sponsors" element={<Sponsors />} />

        
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <AdminConsole />
            ) : (
              <AdminLogin onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
