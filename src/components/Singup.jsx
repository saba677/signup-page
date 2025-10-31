import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successfully!");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group password-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <span
              className="toggle-icon"
              onClick={togglePassword}
              title={passwordVisible ? "Hide Password" : "Show Password"}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>

        <p className="login-text">
          Already have an account? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;

