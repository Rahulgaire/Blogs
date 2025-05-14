import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="logo">📚 RGBlog</div>
        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
        </nav>
        <div className="btn-links">
          <Link to='/dashboard/'>
          <button className="login-btn" >Admin</button></Link>
        <Link to="/login">
          <button className="login-btn" >Login</button></Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
