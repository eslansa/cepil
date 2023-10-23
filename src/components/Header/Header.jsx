import React, { useEffect } from "react";
import './Header.css'
const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".h-wrapper");
      if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="logo" width={100} />

          <div className="flexCenter h-menu">
            <a href="">Empresa</a>
            <a href="">Productos</a>
            <a href="">Noticias</a>
            <button className="button">
              <a href="">Contacto</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
