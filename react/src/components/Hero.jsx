import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            At WellSpring Health Institute , we pride ourselves on being a
            cutting-edge facility devoted to offering extensive healthcare
            services with empathy and proficiency. Our team of adept
            professionals is dedicated to delivering individualized care
            customized to meet the unique needs of each patient. At our, your
            well-being is our top priority, as we strive to guide you on a
            seamless path towards achieving optimal health and well-being."
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
