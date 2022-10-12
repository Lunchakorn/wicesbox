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
            With technology being part and parcel of our everyday life, stepping
            into the future with digital realities is just a way of improving
            our physical realities to our best. Participating in the directory
            of change makers of the universe, we are new and promising kids in
            the block committed to creating and developing innovative app
            development solutions for every industry. Our exclusive app
            development services provide virtual platform concepts including
            metaverse, AI, machine learning, and robotics.
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
