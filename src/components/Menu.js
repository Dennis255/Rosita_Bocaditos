import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCookie, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
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
        <a href="#" className="logo">
          <img src="/imagenbocaditos/logo1.png" alt="Logo" />
        </a>
          
        <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
          <Link to="/">Inicio</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/producto">Product</Link>
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

      <div className="imagen1"> 
        <center>
          <img src="/imagenbocaditos/kupi.gif" width="50%" height="220px" alt="" />
        </center>
      </div>

      <section class="menu" id="menu">
            <h1 class="heading"> our <span>menu</span></h1>
            <div class="box-container">
                <div class="box">
                    <img src="imagenbocaditos/caracolesg.jpg" alt="" />
                    <h3>Caracoles Grandes</h3>
                    <div class="price">$25.00 <span>50.00</span></div>
                    <a href="#" class="btn">add to cart</a>
                    </div>
                    <div class="box">
                    <img src="imagenbocaditos/caracolp.jpg" alt="" />  
                        <h3>Caracoles Pequeños</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/bcarne.JPG" alt="" />  
                        <h3>Volovanes de Carne</h3>
                         <a href="#" class="btn">add to cart</a>
                    </div>
                    <div class="box">
                    <img src="imagenbocaditos/bpollo.jpg" alt="" />  
                        <h3>Volovanes de Pollo</h3>
                        <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/ecarne.jpg" alt="" />  
                        <h3>Empanadas de Carne</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/epollo.JPG" alt="" />  
                        <h3>Empanadas de Pollo</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/equeso.JPG" alt="" />  
                        <h3>Empanadas de Queso</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/bolones.jpg" alt="" />  
                        <h3>Bolones</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/biz.jpg" alt=""/>  
                        <h3>Deditos de Novia</h3>
                        <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/tfrutas.JPG" alt="" />  
                        <h3>Tartaletas de Frutas </h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/tcamaron.jpg" alt=""/>  
                        <h3>Tartaletas de Camarón</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/tpollo.jpg" alt="" />  
                        <h3>Tartalestas de Pollo</h3>
                         <a href="#" class="btn">add to cart</a>
                        </div>
                    <div class="box">
                    <img src="imagenbocaditos/alfajores.jpg" alt="" />  
                        <h3>Alfajores</h3>
                        <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/bchocolate.jpg" alt="" />  
                        <h3>Bolitas de Chocolate</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                <div class="box">
                    <img src="imagenbocaditos/bcoco.jpg" alt="" />  
                        <h3>Bolitas de Coco</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/cup.JPG" alt="" />  
                        <h3>Cup Kake</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/donas.JPG" alt="" />  
                        <h3>Donas</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/fchocolate.jpeg" alt="" />  
                        <h3>Fresas con Chocolate</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/floam.jpg" alt="" />  
                        <h3>Flam</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/mazapan.jpg" alt="" />  
                        <h3>Mazapan</h3>
                        <a href="#" class="btn">add to cart</a>
                        </div>
                    <div class="box">
                    <img src="imagenbocaditos/mouse.JPG" alt="" />  
                        <h3>Mousse</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="/imagenbocaditos/tamal.png" alt="" />  
                        <h3>Tamales</h3>
                         <a href="#" class="btn">add to cart</a>
                         </div>
                    <div class="box">
                    <img src="imagenbocaditos/quimbolitos.jpg" alt=""/>  
                        <h3>Quimbolitos</h3>
                         <a href="#" class="btn">add to cart</a>
                    
               
            </div>
            </div>
        </section>
    </>
  );
};

export default Menu;
