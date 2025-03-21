import React from "react";
import Header from "./Header"; 

const Nosotros = () => {
  return (
    <>
      <Header />

      <section className="about">
        <div className="imagen">
          <h1 className="heading">
            <span>Sobre</span> nosotros
          </h1>
        </div>

        {/* Historia de Superación */}
        <div className="section">
          <div className="image-container">
            <img src="/imagenbocaditos/familia.jpg" alt="Historia del negocio" />
          </div>
          <div className="content">
            <h2>Nuestra historia</h2>
            <p>
              Hace más de una década, Rosa, una madre luchadora, encontró en la repostería una forma de brindar a sus hijas un futuro lleno de amor y oportunidades. 
              Con recetas heredadas de su abuela y una inmensa pasión, comenzó a hornear en su pequeña cocina, vendiendo bocaditos puerta a puerta.
            </p>
            <p>
              Lo que empezó como un sueño modesto pronto se convirtió en un negocio familiar. Hoy, cada pastel y bocadito que ofrecemos lleva consigo la esencia de ese esfuerzo, el cariño de una madre y la calidad que solo el trabajo hecho con amor puede brindar.
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="section">
          <div className="content">
            <h2>Nuestra misión</h2>
            <p>
              Endulzar los momentos más especiales de la vida con productos artesanales, hechos con ingredientes de calidad, amor y dedicación, 
              garantizando una experiencia inolvidable para nuestros clientes.
            </p>
          </div>
          <div className="image-container">
            <img src="/imagenbocaditos/mision.jpg" alt="Nuestra misión" />
          </div>
        </div>

        <div className="section">
          <div className="image-container">
            <img src="/imagenbocaditos/vision.jpg" alt="Nuestra visión" />
          </div>
          <div className="content">
            <h2>Nuestra visión</h2>
            <p>
              Convertirnos en un referente en repostería y bocaditos personalizados, ofreciendo productos innovadores que transmitan amor, 
              tradición y calidad en cada bocado, mientras seguimos creciendo como un negocio familiar comprometido con nuestros clientes.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="section">
          <div className="content">
            <h2>Nuestros valores</h2>
            <ul>
              <li>❤️ amor y pasión por lo que hacemos</li>
              <li>🍰 calidad y frescura en cada producto</li>
              <li>👨‍👩‍👧‍👧 compromiso con la familia y la comunidad</li>
              <li>🎂 personalización y atención al detalle</li>
            </ul>
          </div>
          <div className="image-container">
            <img src="/imagenbocaditos/valores.jpg" alt="Nuestros valores" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <span>📞 Celular: 0988660874 / 0992763202</span>
          </div>
          <div className="footer-info">
            <span>📍 Dirección: Villarroel entre Tarqui y Velasco</span>
          </div>
          <div className="footer-info">
            <span>⏰ Horario: 08:00 AM - 21:00 PM</span>
          </div>
          <div className="footer-info">
            <span>📧 Correo: rosabarcatenemaza@gmail.com</span>
          </div>
        </div>
      </footer>

      {/* Estilos */}
      <style>{`
        .imagen {
          background-image: url('/imagenbocaditos/fondo.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heading {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          color: white;
          background: rgba(0, 0, 0, 0.5);
          padding: 30px;
          border-radius: 10px;
          width: fit-content;
          text-transform: none; /* Asegura que el texto no se transforme */
        }

        .section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin: 40px 0;
          padding: 20px;
        }

        .image-container {
          flex: 1;
          text-align: center;
        }

        .image-container img {
          width: 90%;
          max-width: 400px;
          border-radius: 15px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }

        .content {
          flex: 1;
          padding: 20px;
          max-width: 600px;
          text-transform: none; /* Evita transformaciones en el texto */
        }

        .content h2 {
          color: #7d4c9e;
          font-size: 28px;
          margin-bottom: 15px;
          text-align: center;
          text-transform: none; /* Asegura que el título respete el formato original */
        }

        .content p, .content ul {
          font-size: 18px;
          line-height: 1.6;
          text-align: justify;
          text-transform: none; /* Evita que el texto se fuerce a mayúsculas */
        }

        .content ul {
          list-style-type: none;
          padding: 0;
        }

        .content ul li {
          font-size: 18px;
          padding: 8px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer {
          text-align: center;
          padding: 20px;
          background: #7d4c9e;
          color: white;
          margin-top: 40px;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .footer-info {
          font-size: 16px;
        }

      `}</style>
    </>
  );
};

export default Nosotros;
