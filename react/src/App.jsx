//import React, { useContext, useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";

import { Context } from "./main";
import Login from "./Pages/Login";

import DashboardLayout from "./components/Layout/DashboardLayout";


function App() {
  return (
    <>
      <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboardlayout" element={<DashboardLayout />} />
          
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
