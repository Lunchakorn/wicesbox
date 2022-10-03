import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero-container">
      <div className="hero-container-video">
        <video
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
          src='https://firebasestorage.googleapis.com/v0/b/wicexbox.appspot.com/o/portfolio.mp4?alt=media&token=d3469140-a1ab-4691-bb00-52bb5c5bb898'
          poster="./video/poster.jpg"
        ></video>
      </div>
      <div className="hero-container-description">
        <h1 className="hero-container-description-first">
          Welcome to WiCES Research Unit,
        </h1>
        <h1 className="hero-container-description-second">
          Chulalongkorn University.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
    </section>
  );
};

export default Hero;
