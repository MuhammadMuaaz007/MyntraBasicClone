import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setStatus("Passwords do not match");
      return;
    }
    setStatus("Account created (demo). Connect to your backend.");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-card-header">
          <h2>Create Account</h2>
          <p>Unlock faster checkout, curated recommendations, and more.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              required
              placeholder="Alex Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              required
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Repeat your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn-auth-primary">
            Sign Up
          </button>
          {status && <p className="auth-status">{status}</p>}
        </form>
        <div className="auth-helper">
          <span>Already have an account?</span>
          <Link to="/login">Login here</Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;

