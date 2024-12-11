import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Ensure this path is also correct
import Landing_Page from './Components/Landing_Page/LandingPage'; // Correct import path
import './App.css';

// Main App component
function App() {
  return (
    <Router>
      {/* Navbar will be rendered on every page */}
      <Navbar />

      {/* Define Routes for different pages */}
      <Routes>
        {/* Route for the Landing Page */}
        <Route path="/" element={<Landing_Page />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
