import React from "react";
import "./Hero.css";
import { HiSearch } from "react-icons/hi";
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
                <img src="./logo.png" alt="" /> <br />El astro de la<br />higiene.
              </h1>
            </div>

            <div className="flexColStart hero-des">
              <span className="secondaryText">
              CEPIL, líder en la producción de plásticos y cepillos en Cuba, fundada en 1963, ha evolucionado con el país, manteniendo su identidad y adaptándose a las diferentes etapas económicas.
              </span>
              <span className="secondaryText"> Hoy, CEPIL es un referente en la industria transformativa del plástico, reconocida por su calidad y preferida por sus consumidores
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiSearch color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Buscar</button>
            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={30} end={65} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Prodcutos</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={30} end={56} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Años</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={200} end={300} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Trabajadores</span>
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
