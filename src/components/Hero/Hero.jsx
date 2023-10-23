import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup"
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left slide */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              {/* <div className="orange-circle" /> */}
              <h1>
                Cepil<br />El astro de la<br />higiene.
              </h1>
            </div>

            <div className="flexColStart hero-des">
              <span className="secondaryText">
                Deserunt explicabo saepe illo similique ex, veniam cupiditate.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Products</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Products</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Products</span>
              </div>
            </div>

          </div>
          {/* right slide */}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
