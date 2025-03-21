import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../components/Categorias.css';

const Categorias = () => {
  return (
    <>
      <div className="main-content"> {/* Envuelve todo el contenido principal */}
        <section className="categories">
          <h2>Elige tu bocadito favorito</h2>
          <div className="category-container">
            <Link to="/menu#hojaldre" className="category">
              <img src="/imagenbocaditos/hojaldre.jpg" alt="Bocaditos de Hojaldre" />
              <h3>Bocaditos de Hojaldre</h3>
            </Link>
            <Link to="/menu#especiales" className="category">
              <img src="/imagenbocaditos/especiales.jpg" alt="Bocaditos Especiales" />
              <h3>Bocaditos Especiales</h3>
            </Link>
            <Link to="/menu#postres" className="category">
              <img src="/imagenbocaditos/postres.jpg" alt="Postres" />
              <h3>Postres</h3>
            </Link>
            <Link to="/menu#reposteria" className="category">
              <img src="/imagenbocaditos/reposteria.jpg" alt="Repostería" />
              <h3>Repostería</h3>
            </Link>
          </div>
        </section>
      </div>

      {/* Pie de página pegado abajo */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <FontAwesomeIcon icon={faPhone} /> <span>Celular: 0988660874 / 0992763202</span>
          </div>
          <div className="footer-info">
            <FontAwesomeIcon icon={faPhone} /> <span>Teléfono: 032944080</span>
          </div>
          <div className="footer-info">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Dirección: Villarroel entre Tarqui y Velasco</span>
          </div>
          <div className="footer-info">
            <FontAwesomeIcon icon={faClock} /> <span>Horario: 08:00 AM - 21:00 PM</span>
          </div>
          <div className="footer-info">
            <FontAwesomeIcon icon={faEnvelope} /> <span>Correo: rosabarcatenemaza@gmail.com</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Categorias;
