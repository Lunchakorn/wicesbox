import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about-us">
      <hr />
      <div className="about-us-container">
        <div className="aboutus-description">
          <h2>ABOUT US</h2> 
          <p className="about-us-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
          </p>
        </div>
        <div className="aboutus-image">
          <img
            src="images/about-us.png"
            alt="about us image"
            className="aboutus-image-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
