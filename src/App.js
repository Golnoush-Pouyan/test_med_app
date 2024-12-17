import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // Navbar component
import LandingPage from "./Components/Landing_Page/LandingPage"; // Landing Page
import Login from "./Components/Login/Login"; // Login component
import SignUp from "./Components/Sign_Up/SignUp"; // Sign Up component
import InstantConsultation from "./Components/InstantConsultation/InstantConsultation"; // Instant Consultation component
import "./App.css"; // Global styles

// Main App component
function App() {
  return (
    <Router>
      {/* Navbar will be rendered on every page */}
      <Navbar />

      {/* Define Routes for different pages */}
      <Routes>
        {/* Route for the Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for the Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Route for the Instant Consultation Page */}
        <Route path="/instant-consultation" element={<InstantConsultation />} />

        {/* 404 Not Found Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
