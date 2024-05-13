import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

import { Context } from "../main";

import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [userName, setuserName] = useState("");
  const [department, setdepartment] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
 
  const [selectedDoctor, setSelectedDoctor] = useState({ name: "" });
  const [email, setEmail] = useState("");
  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
  ];
  const staticDoctorsArray = [
    {
      name: "Dr. John Doe",
      email: "john.doe@example.com",
      department: "Pediatrics",
    },
    {
      name: "Dr. Azka Rehamn",
      email: "Azka.reh@example.com",
      department: "Orthopedics",
    },
    {
      name: "Dr. Salman shah",
      email: "salman.shah@example.com",
      department: "Cardiology",
    },
    {
      name: "Dr. Samia Sehzad",
      email: "samia.seh@example.com",
      department: "Neurology",
    },
    {
      name: "Dr. Abdul Kareem",
      email: "Abdul.karem@example.com",
      department: "Oncology",
    },
    {
      name: "Dr. Rayyan Ahamd",
      email: "rayyan.ahmad@example.com",
      department: "Radiology",
    },
    {
      name: "Dr. Jane Smith",
      email: "jane.smith@example.com",
      department: "Physical Therapy",
    },
    // Add more doctors as needed
  ];

  useEffect(() => {
    // Fetch any initial data or perform any setup here
  }, []);

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/user/createuser",
        {
          userName,
          email,
          phone,
          nic,
          dob,
          gender,
          password,
          department,
          userEmail,
          usertype,
          // doctorEmail,
          doctorEmail: selectedDoctor.email,
        },
        {
          withCredentials: true,
        }
      );
      if (data.error) {
        throw new Error(data.error); 
      }

      alert("User created successfully");
      setIsAuthenticated(true);
    } catch (error) {
      alert(error.message); 
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Navbar />
      <div className="container form-component register-form">
        <h2>Sign Up</h2>
        <p>Please Sign Up To Continue</p>

        <form onSubmit={handleRegistration}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
           
            <select
              value={selectedDoctor.name}
              onChange={(e) => {
                const selectedDoc = staticDoctorsArray.find(
                  (doc) => doc.name === e.target.value
                );
                setSelectedDoctor(selectedDoc || { name: "" });
              }}
            >
              <option value="">Select Doctor</option>
              {staticDoctorsArray
                .filter((doc) => doc.department === department)
                .map((doc, index) => (
                  <option key={index} value={doc.name}>
                    {doc.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="email"
              placeholder="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="text"
              placeholder="userType"
              value={usertype}
              onChange={(e) => setUsertype(e.target.value)}
            />
            <input
              type={"date"}
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           
            <select
              value={department}
              onChange={(e) => setdepartment(e.target.value)}
            >
              {departmentsArray.map((depart, index) => (
                <option key={index} value={depart}>
                  {depart}
                </option>
              ))}
            </select>
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/signin"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Login Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
