import axios from "axios";
import React, { useContext, useState } from "react";

import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:4000/auth/login",
      { userName, password },
      {
        withCredentials: true,
      }
    );
    if (data.error) {
      return alert("invalid credentials");
    }
    setIsAuthenticated(true);
    alert("logged in successfully");
    return navigate("/dashboardlayout");
  };

  return (
    <>
      <Navbar />;
      <div className="container form-component login-form">
        <h2>Login</h2>
        <p>Please Login To Continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="userName"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
           
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
