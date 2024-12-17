import React, { useState } from "react";
import "./SignUp.css"; // CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config"; // Ensure the config file has API_URL defined

const Sign_Up = () => {
  // State to manage form fields and errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showerr, setShowerr] = useState(""); // Error message display
  const navigate = useNavigate();

  // Form submission handler
  const register = async (e) => {
    e.preventDefault();
    setShowerr(""); // Reset error message

    try {
      // API call to register the user
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phone: phone,
        }),
      });

      const json = await response.json();

      // Check for success response
      if (json.authtoken) {
        // Store data in session storage
        sessionStorage.setItem("auth-token", json.authtoken);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("phone", phone);
        sessionStorage.setItem("email", email);

        // Navigate to home and reload
        navigate("/");
        window.location.reload();
      } else {
        // Display errors
        if (json.errors) {
          for (const error of json.errors) {
            setShowerr(error.msg);
          }
        } else {
          setShowerr(json.error || "Something went wrong");
        }
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setShowerr("Failed to connect to the server.");
    }
  };

  // Render the Sign Up form
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
          <p>
            Already a member?{" "}
            <Link to="/login" style={{ color: "#2190FF" }}>
              Login
            </Link>
          </p>
        </div>

        <div className="signup-form">
          <form method="POST" onSubmit={register}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Error Message */}
            {showerr && <div style={{ color: "red" }}>{showerr}</div>}

            {/* Submit and Reset Buttons */}
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setPhone("");
                  setPassword("");
                  setShowerr("");
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;
