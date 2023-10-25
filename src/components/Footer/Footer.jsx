import React from "react";
import {BsFacebook, BsTwitter, BsYoutube} from 'react-icons/bs'
import "./Fotter.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Información</span>
          <span className="secondaryText"> Enlace a Carretera Morón Km 1, Ciego de Avila. Cuba.</span>
          <span className="secondaryText">(+53) 33225973, (+53) 33222764.</span>
          <span className="secondaryText">ventas@cepil.co.cu</span>
        </div>
        <div className="flexColStart f-left">
          <span className="primaryText">
          Redes Sociales
          </span>
          <div className="f-flexRowStart f-icons">
          <BsFacebook/>
          <BsTwitter />
          <BsYoutube />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
