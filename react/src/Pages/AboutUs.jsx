import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <>
    <Navbar/>
      <Hero
        title={"Learn More About Us | WellSpring  Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
      <Footer/>
    </>
  );
};

export default AboutUs;
