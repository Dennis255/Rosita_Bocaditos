import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCookie, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const About = () => {
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
    <section className="about" id="about">
      <header className="header">
        <Link to="/" className="logo">
          <img src="/imagenbocaditos/logo1.png" alt="Logo" />
        </Link>
        <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
          <Link to="/">Inicio</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/producto">Producto</Link> {/* Verifica que la ruta de importación sea correcta */}
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
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

        <img src="/imagenbocaditos/tab.png" width="100" alt="" />

        <div className={`cookie-items-container ${cookieActive ? 'active' : ''}`}>
          <div className="cookie-item">
            <span className="fas fa-times"></span>
            <img src="/imagenbocaditos/p3.jpeg" alt="" />
            <div className="content">
              <h3>Grado</h3>
            </div>
          </div>
          <div className="cookie-item">
            <span className="fas fa-times"></span>
            <img src="/imagenbocaditos/p2.jpeg" alt="" />
            <div className="content">
              <h3>Infantil</h3>
            </div>
          </div>
          <div className="cookie-item">
            <span className="fas fa-times"></span>
            <img src="/imagenbocaditos/p4.jpeg" alt="" />
            <div className="content">
              <h3>Aniversario</h3>
            </div>
          </div>
          <div className="cookie-item">
            <span className="fas fa-times"></span>
            <img src="/imagenbocaditos/p5.jpeg" alt="" />
            <div className="content">
              <h3>Boda</h3>
            </div>
          </div>
          <a href="#" className="btn">checkout now</a>
        </div>
      </header>
      <div className="imagen">
        <h1 className="heading"><span> About</span> us </h1>
        <div className="row">
          <div className="image">
            <img src="/imagenbocaditos/kup1.jpg" alt="" />
          </div>
          <div className="content">
            <h3>NUESTRO OBJETIVO ES QUE TUS MOMENTOS SEAN INOLVIDABLES</h3>
            <p>Estamos ampliamente capacitados para hacer de tus tortas y bocaditos únicos y con un sabor delicioso! Lo que te imagines lo podrán plasmar en un pastel</p>
            <a href="#" className="btn">learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
