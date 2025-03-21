import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCookie, faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [cookieActive, setCookieActive] = useState(false);

  // Alternar menú
  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
    setSearchActive(false);
    setCookieActive(false);
  };

  // Cerrar menú cuando se selecciona una opción
  const closeNavbar = () => {
    setNavbarActive(false);
  };

  // Alternar búsqueda
  const toggleSearch = () => {
    setSearchActive(!searchActive);
    setNavbarActive(false);
    setCookieActive(false);
  };

  // Alternar cookies
  const toggleCookie = () => {
    setCookieActive(!cookieActive);
    setNavbarActive(false);
    setSearchActive(false);
  };

  // Cerrar todo cuando se hace scroll
  const handleScroll = () => {
    setNavbarActive(false);
    setSearchActive(false);
    setCookieActive(false);
  };

  window.onscroll = handleScroll;

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/imagenbocaditos/logo1.png" alt="Logo" />
      </Link>

      <nav className={`navbar ${navbarActive ? "active" : ""}`}>
        
        <Link to="/" onClick={closeNavbar}>Inicio</Link>
        <Link to="/menu" onClick={closeNavbar}>Menú</Link>
        <Link to="/about" onClick={closeNavbar}>Contacto</Link>
        <Link to="/recomendaciones" onClick={closeNavbar}>Recomendaciones</Link>
        <Link to="/Nosotros" onClick={closeNavbar}>Nosotros</Link>
      </nav>

      <div className="icons">
        
        
        <FontAwesomeIcon icon={faBars} id="menu-btn" onClick={toggleNavbar} />
      </div>

      <div className={`search-form ${searchActive ? "active" : ""}`}>
        <input type="search" id="search-box" placeholder="Buscar aquí..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <div className={`cookie-items-container ${cookieActive ? "active" : ""}`}>
        <div className="cookie-item">
          <span className="fas fa-times"></span>
          <img src="imagenbocaditos/p3.jpeg" alt="" />
          <div className="content">
            <h3>Grado</h3>
          </div>
        </div>
        <div className="cookie-item">
          <span className="fas fa-times"></span>
          <img src="imagenbocaditos/p2.jpeg" alt="" />
          <div className="content">
            <h3>Infantil</h3>
          </div>
        </div>
        <div className="cookie-item">
          <span className="fas fa-times"></span>
          <img src="imagenbocaditos/p4.jpeg" alt="" />
          <div className="content">
            <h3>Aniversario</h3>
          </div>
        </div>
        <div className="cookie-item">
          <span className="fas fa-times"></span>
          <img src="imagenbocaditos/p5.jpeg" alt="" />
          <div className="content">
            <h3>Boda</h3>
          </div>
        </div>
        <a href="#" className="btn">Checkout Now</a>
      </div>
    </header>
  );
};

export default Header;
