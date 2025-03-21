import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCookie, faShoppingCart, faBars, faPhone, faEnvelope, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Header from "../components/Header";
const Contacto = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <div>
      {/* Header reutilizable */}
      <Header />

      {/* Sección de Contacto */}
      <section className="contacto">
        <h2 className="contacto-titulo">📍 Contacto</h2>
        <div className="contacto-container">
          {/* Mapa a la izquierda */}
          <div className="contacto-mapa">
            <iframe
              title="Ubicación de Bocaditos Rosita"
              src="https://maps.google.com/maps?q=Villarroel%20y%20Tarqui,%20Riobamba,%20Ecuador&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Información a la derecha */}
          <div className="contacto-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="icono" />
              <p><strong>Celular:</strong> 0988660874 / 0992763202</p>
              <p><strong>Teléfono:</strong> 032944080</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icono" />
              <p><strong>Dirección:</strong> Villarroel entre Tarqui y Velasco</p>
              <a href="https://maps.app.goo.gl/zJC6Xke9K2cmiKQw9" target="_blank" rel="noopener noreferrer" className="link-mapa">
                Ver en Google Maps
              </a>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="icono" />
              <p><strong>Correo:</strong> <a href="mailto:rosabarcatenemaza@gmail.com">rosabarcatenemaza@gmail.com</a></p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faClock} className="icono" />
              <p><strong>Horarios:</strong></p>
              <p>Lunes a Sábado: 07:00 am - 21:00 pm</p>
              <p>Domingo: 07:00 am - 20:00 pm</p>
            </div>

            {/* Botón de WhatsApp */}
            <a
              href="https://wa.me/593988660874?text=¡Hola!%20Estoy%20interesado%20en%20pedir%20bocaditos%20de%20Bocaditos%20Rosita.%20¿Podrían%20darme%20más%20información?"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Chatea con nosotros
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-derechos">© 2025 Bocaditos Rosita. Todos los derechos reservados.</p>
      </footer>

      {/* Estilos */}
      <style>{`
        .contacto {
          text-align: center;
          padding: 100px 20px 50px; /* Aumenté el padding superior para bajar el contenido */
          background-color: #f9f9f9;
        }
          html, body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.contacto-container {
  margin-bottom: 0px; /* Reducir el espacio innecesario */
  padding-bottom: 10px; /* Ajustar el espacio interno */
}

        .contacto-titulo {
  font-size: 2.5em;
  color: #333;
  margin-top: 50px; /* Aumenté el margen superior para separarlo del header */
  margin-bottom: 30px;
  text-align: center;
}


        .contacto-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 40px;
          max-width: 1100px;
          margin: auto;
        }

        .contacto-mapa {
          flex: 1;
          min-width: 350px;
        }

        .contacto-info {
          flex: 1;
          min-width: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 1.5em; /* Aumenté el tamaño del texto */
          gap: 20px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 10px;
        }

        .icono {
          font-size: 1.8em;
          color: #d35400;
          margin-bottom: 5px;
        }

        .link-mapa {
          color: #3498db;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1em;
        }

        .whatsapp-btn {
          background-color: #25D366;
          color: white;
          padding: 12px 18px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 1.3em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 30px; /* Aumenté el padding del footer */
          font-size: 1.3em; /* Agrandé un poco más el texto del footer */
          margin-top: 0px;
          padding-top: 10px; /* Ajustar el espacio interno */
        }

        .footer-derechos {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Contacto;
