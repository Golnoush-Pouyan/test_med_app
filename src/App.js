import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // Ensure this path is correct
import LandingPage from "./Components/Landing_Page/LandingPage"; // Correct import path with PascalCase
import Login from "./Components/Login/Login"; // Import the Login component
import SignUp from "./Components/Sign_Up/SignUp"; // Import the SignUp component
import "./App.css";

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
      </Routes>
    </Router>
  );
}

export default App;
