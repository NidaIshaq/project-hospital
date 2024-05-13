import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Appointment = () => {
  return (
    <>
      <Navbar />
      <Hero
        title={"Schedule Your Appointment | WellSpring Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
      <Footer />
    </>
  );
};

export default Appointment;
