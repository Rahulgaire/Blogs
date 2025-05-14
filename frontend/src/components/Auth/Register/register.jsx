import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
     const Navigate=useNavigate();
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    Navigate('/')
    e.preventDefault();
    // Add registration logic here
    console.log('Registration submitted', formData);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <div className="register-branding">
          <h1>Create Your Journey </h1>
          <p>Join us and unlock the next level of innovation.</p>
        </div>
      </div>
  
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
        <div className="register-header">
          <h1>Register</h1>
        </div>
          <div className="form-group">
            <input 
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input 
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group password-group">
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
            <div className="password-show">
              <input 
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
          </div>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Login Now</a></p>
        </div>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
}  


export default Register;