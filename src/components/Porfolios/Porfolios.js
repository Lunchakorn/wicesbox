import React from "react";
import "./Porfolios.css";

const Porfolios = () => {
  return (
    <section id="portfolio-section">
      <h2>Our Portfolios</h2>
      <p className="portfolio-section-p">
        As a pioneer of innovative technology development, we have created
        immersive and interactive virtual worlds and landscapes to our credit
        with cutting edge and custom solutions for our clients, and we are
        hungry for more.
      </p>
      <div className="portfolio-container">
        <div className="portfolio">
          <div className="portfolio-image-container">
            <img
              src="./images/portfolio/ChulaMuseum.png"
              alt="portfolio1"
              className="portfolio-image"
              loading="lazy"
            />
          </div>

          <p className="portfolio-description">
            Chulalongkorn University Memorial Hall
          </p>
        </div>
        <div className="portfolio">
          <div className="portfolio-image-container">
            <img
              src="./images/portfolio/Egat.png"
              alt="portfolio1"
              className="portfolio-image"
              loading="lazy"
            />
          </div>
          <p className="portfolio-description">EGAT Dam</p>
        </div>
        <div className="portfolio">
          <div className="portfolio-image-container">
            <img
              src="./images/portfolio/Vege.jpg"
              alt="portfolio1"
              className="portfolio-image"
              loading="lazy"
            />
          </div>
          <p className="portfolio-description">Vegetable game</p>
        </div>
        <div className="portfolio">
          <div className="portfolio-image-container">
            <img
              src="./images/portfolio/Train.jpg"
              alt="portfolio1"
              className="portfolio-image"
              loading="lazy"
            />
          </div>
          <p className="portfolio-description">Train game</p>
        </div>
        <div className="portfolio">
          <div className="portfolio-image-container">
            <img
              src="./images/portfolio/machine-learning.jpg"
              alt="portfolio1"
              className="portfolio-image"
              loading="lazy"
            />
          </div>

          <p className="portfolio-description">
            Machine-learning-based automated quantification machine for virus
            plaque assay and ELISpot counting
          </p>
        </div>
        {/* <div className="portfolio">
          <img
            src="https://source.unsplash.com/random/300x300"
            alt="portfolio1"
          />
          <p className="portfolio-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Porfolios;
