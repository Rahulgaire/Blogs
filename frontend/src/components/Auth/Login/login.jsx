import React, { useState } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3000/api/login", form);
      console.log(res.data);
      if (res.ok) {
        localStorage.setItem('email',res.data.email)
        alert("Login successfully", res.data.message);
      }
    } catch (error) {
      alert("Login failed");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="background-blob"></div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={handleInput}
            name="email"
            value={form.email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleInput}
            name="password"
            value={form.password}
          />
          <button type="submit" className="login-btn">Login</button>
          <div className="register-link">
            Don't have an account? <a href="/register">SignUp</a>
          </div>
        </form>
      </div>

      <div className="login-design">
        <h1>Explore Blogs</h1>
        <p>Stay updated, stay connected. Join our community now and make your day more productive!</p>
      </div>
    </div>
  );
}

export default Login;
