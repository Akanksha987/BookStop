import React from "react";
import "./About.css";
import aboutImg from "../../images/6897212-removebg-preview.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title">About BookStop</h2>
            <p>
              Book Stop is an online website where juniors can interact with
              their seniors to exchange their books. It will help both seniors
              and juniors to sell and buy books at cheaper rates.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
