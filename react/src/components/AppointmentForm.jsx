
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [status, setStatus] = useState("pending");
  const [selectedDoctor, setSelectedDoctor] = useState({ name: "", email: "" });

  const [userEmail, setUserEmail] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

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

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/user/createappointment",
        {
          userName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          status,
          doctorName: selectedDoctor.name,
          doctorEmail: selectedDoctor.email,
          userEmail,
          hasVisited: hasVisitedBool,
          address,
        },
        { withCredentials: true }
      );
      toast.success(data.message);
      // Clear form fields after successful submission
      setUserName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("");
      setStatus("pending");
      setSelectedDoctor({ name: "", email: "" });
      setUserEmail("");
      setAddress("");
      setHasVisited(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Appointment</h2>
        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              value={selectedDoctor.name}
              onChange={(e) => {
                const selectedDoc = staticDoctorsArray.find(
                  (doc) => doc.name === e.target.value
                );
                setSelectedDoctor(selectedDoc || { name: "", email: "" });
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
              type="email"
              placeholder="User Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="date"
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
              type="date"
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              {departmentsArray.map((depart, index) => (
                <option key={index} value={depart}>
                  {depart}
                </option>
              ))}
            </select>
          </div>
          <textarea
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Have you visited before?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
