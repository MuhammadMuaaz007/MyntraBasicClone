import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Logged in (demo). Hook this up to your auth service.");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-card-header">
          <h2>Welcome Back</h2>
          <p>Sign in to access your bag, wishlist and orders.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
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
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn-auth-primary">
            Login
          </button>
          {status && <p className="auth-status">{status}</p>}
        </form>
        <div className="auth-helper">
          <span>New to Myntra?</span>
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </main>
  );
};

export default Login;

