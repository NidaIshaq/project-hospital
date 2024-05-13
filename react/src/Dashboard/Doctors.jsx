import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/user/getAlldr",
          { withCredentials: true }
        );
        setDoctors(data.response || []); // Assuming the response contains an array of doctors
      } catch (error) {
        console.error("Error fetching doctors:", error);
        // Handle errors properly
      }
    };
    fetchDoctors();
  }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div className="card" key={index}>
              <h6>{doctor.userName}</h6>
              <div className="details">
                <p>
                  Email: <span>{doctor.doctorEmail}</span>
                </p>
                <p>
                  Phone: <span>{doctor.phone}</span>
                </p>
                <p>
                  Date of Birth: <span>{doctor.dob}</span>
                </p>
                <p>
                  Department: <span>{doctor.department}</span>
                </p>
                <p>
                  NIC: <span>{doctor.nic}</span>
                </p>
                <p>
                  Gender: <span>{doctor.gender}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
