import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
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
    <section className="h-wrapper">
       <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo-cepil.svg" alt="logo" width={100} />

        <OutsideClickHandler 
        onOutsideClick={()=> {
          setMenuOpened(false)
        }} 
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="">Empresa</a>
            <a href="">Productos</a>
            <a href="">Noticias</a>
            <a href="">Contacto</a>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
