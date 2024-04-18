//import React, { useContext, useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

// import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";
// import DashboardLayout from "../src/components/Layout/DashboardLayout";
//import Dashboard from "./Dashboard/Dashboard";
import DashboardLayout from "./components/Layout/DashboardLayout";
// import Loginn from "./Dashboard/login";
// import AddNewAdmin from "./Dashboard/AddNewAdmin";
// import Messagess from "./Dashboard/Messages";
// import Doctors from "./Dashboard/Doctors";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboardlayout" element={<DashboardLayout />} />
          {/* <Route path="/login1" element={<Loginn />} />
          <Route path="/doctor/addnew" element={<AddNewDoctor />} />
          <Route path="/admin/addnew" element={<AddNewAdmin />} />
          <Route path="/messages" element={<Messagess />} />
          <Route path="/doctors" element={<Doctors />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
