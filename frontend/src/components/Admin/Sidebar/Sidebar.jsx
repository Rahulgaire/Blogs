import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <a href="/dashboard/Create">Add Blog</a>
      <a href="/dashboard/AllBlog">All Blog</a>
      <a href="/dashboard/BlogDetails">Details</a>
    </nav>
  );
}

export default Sidebar;
