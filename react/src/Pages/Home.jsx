import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        title={
          "Welcome to WellSpring Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />

      <Departments />
      <MessageForm />
      <Footer />
    </>
  );
}

export default Home;
