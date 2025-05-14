import React from 'react';
import { Routes, Route } from "react-router-dom";
import Blog from '../All Blog/AllBlog';
import Create from '../Create Blog/Create';
import Sidebar from '../Sidebar/Sidebar';
import Header from "../Header/Header";
import Details from '../All Blog/Details';

function Dashboard() {
  return (
    <>
      <Header/>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={< Blog/>} /> {/* Removed leading slash */}
            <Route path="AllBlog" element={<Blog />} /> {/* Removed leading slash */}
            <Route path="Create" element={<Create />} /> {/* Removed leading slash */}
            <Route path="BlogDetails" element={<Details />} /> {/* Removed leading slash */}
          </Routes>
        </main>
      </div>
    </>
  );
}

export default Dashboard;