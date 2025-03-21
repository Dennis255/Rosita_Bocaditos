import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      {/* Sección de bienvenida */}
      <section className="home" id="home">
        <div className="content">
          <h3>Hacer de los dulces un arte</h3>
          <p>Bocaditos "Rosita" te da la más cordial bienvenida a su página web en la que podrás encontrar una gran variedad de productos.</p>
          <Link to="/categorias" className="btn">Ver Categorías</Link>
        </div>
      </section>

      {/* Pie de página */}
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

export default Home;
