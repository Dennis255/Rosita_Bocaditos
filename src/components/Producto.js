import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCookie, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Producto = () => {
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
    <>
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

      <div className="imagen2">
        <center>
          <img src="/imagenbocaditos/prod.gif" width="25%" height="220px" alt="" />
        </center>
      </div>

      <section className="product" id="product">
        <h1 className="heading">our <span>product</span></h1>
        <div className="box-container">
          {[
            { img: "/imagenbocaditos/ca.jpg", title: "Caracoles" },
            { img: "/imagenbocaditos/v.jpg", title: "Caracoles" },
            { img: "/imagenbocaditos/v.jpg", title: "Caracoles" },
            { img: "/imagenbocaditos/t.jpeg", title: "Caracoles" },
            { img: "/imagenbocaditos/ts.jpg", title: "Caracoles" },
            { img: "/imagenbocaditos/f.jpg", title: "Caracoles" },
            { img: "/imagenbocaditos/r.jpg", title: "Caracoles" },
            { img: "/imagenbocaditos/ku.jpg", title: "Caracoles" },
            { img: "/imagenbocaditos/ch.jpeg", title: "Caracoles" }
          ].map((item, index) => (
            <div className="box" key={index}>
              <div className="icons">
                <a href="#" className="fas fa-shopping-cart"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Producto;
