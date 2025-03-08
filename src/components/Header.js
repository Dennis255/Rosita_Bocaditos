// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCookie, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [cookieActive, setCookieActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
    setSearchActive(false);
    setCookieActive(false);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    setNavbarActive(false);
    setCookieActive(false);
  };

  const toggleCookie = () => {
    setCookieActive(!cookieActive);
    setNavbarActive(false);
    setSearchActive(false);
  };

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
      <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
        <Link to="/">Inicio</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/producto">Producto</Link>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
        <Link to="/registro">Registro</Link> {/* Enlace al registro */}
        <Link to="/login" >Login</Link>
        <Link to="/actualizar" >Actualizar</Link>
        
      </nav>

      <div className="icons">
        <FontAwesomeIcon icon={faSearch} id="search-btn" onClick={toggleSearch} />
        <FontAwesomeIcon icon={faCookie} id="cookie-btn" onClick={toggleCookie} />
        <FontAwesomeIcon icon={faShoppingCart} id="cart-btn" />
        <FontAwesomeIcon icon={faBars} id="menu-btn" onClick={toggleNavbar} />
      </div>

      <div className={`search-form ${searchActive ? 'active' : ''}`}>
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <img src="imagenbocaditos/tab.png" width="100" alt="" />

      <div className={`cookie-items-container ${cookieActive ? 'active' : ''}`}>
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
        <a href="#" className="btn">checkout now</a>
      </div>

      
    </header>
  );
};

export default Header;
