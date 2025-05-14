import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Fixed 'route' to 'Route'
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from './components/Auth/Login/login';
import Register from "./components/Auth/Register/register"
function App() {
  const location = useLocation(); // Get the current location
  const isDashboard = location.pathname.startsWith("/dashboard" ); // Check if the current route is part of the Dashboard
  const isAuth = location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
    
      {!isDashboard  && <Navbar />} 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login/>} />  
        <Route path="/register" element={<Register/>} />  
        <Route path="/dashboard/*" element={<Dashboard />} />  
      </Routes>
  
     {!isDashboard && !isAuth && <Footer/>} 
    </>
  );
}

export default App;