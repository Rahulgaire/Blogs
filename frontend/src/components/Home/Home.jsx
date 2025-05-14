import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
<>
<div className="image-container">
      <img
        src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
        alt="Blog Banner"
        className="banner-img"
      />
      <div className="image-text">
        <h1>Welcome to RGBlog</h1>
        <p>Your space to read, write, and explore ideas.</p>
        <Link to="/blogs" className="explore-btn">Explore Blogs</Link>
      </div>
    </div>
</>
  );
}

export default Home;
