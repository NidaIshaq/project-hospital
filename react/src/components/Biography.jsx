import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Certainly! Here's a biography for "WellSpring Health Institute":
            WellSpring Health Institute is a beacon of wellness nestled in the
            heart of the community. Established in 1990, . With a mission to
            provide comprehensive and compassionate care, we strive to enrich
            the lives of all those we serve. At WellSpring, we understand that
            healthcare is more than just treating ailments; it's about nurturing
            the body, mind, and spirit. Our multidisciplinary team of healthcare
            professionals, including doctors, nurses, therapists, and support
            staff, allowing us to deliver the highest standard of medical
            treatment and diagnostic services. From routine check-ups to complex
            surgical procedures, our team is equipped to handle a wide range of
            healthcare needs. But our commitment to our community extends beyond
            the walls of our institute. At WellSpring Health Institute, we
            believe that everyone deserves access to quality healthcare, and we
            are dedicated to making a positive impact on the lives of our
            patients and the communities we serve.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
