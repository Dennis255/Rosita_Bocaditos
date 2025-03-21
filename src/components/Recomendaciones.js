import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from './Header'; // Importando el Header externo

const Recomendaciones = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const enviarWhatsApp = (producto) => {
    const numeroEmpresa = "593988660874";
    const mensaje = `Hola, estoy interesado en la recomendación: *${producto}*. ¿Podrían darme más información?`;
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  // Datos de eventos y productos recomendados
  const eventos = [
    {
      id: "bodas",
      titulo: "Recomendaciones para Bodas",
      productos: [
        { nombre: "Torta de Bodas", imagen: "/imagenesrecomendaciones/torta_boda.jpg" },
        { nombre: "Mesa de Dulces", imagen: "/imagenesrecomendaciones/mesa_dulces.jpg" },
        { nombre: "Vinos Especiales", imagen: "/imagenesrecomendaciones/vinos.jpg" }
      ]
    },
    {
      id: "graduaciones",
      titulo: "Recomendaciones para Graduaciones",
      productos: [
        { nombre: "Cupcakes Temáticos", imagen: "/imagenesrecomendaciones/cupcakes_graduacion.jpg" },
        { nombre: "Bocaditos Salados", imagen: "/imagenesrecomendaciones/bocaditos_salados.jpg" },
        { nombre: "Torta de Graduación", imagen: "/imagenesrecomendaciones/torta_graduacion.jpg" }
      ]
    },
    {
      id: "cumpleaños",
      titulo: "Recomendaciones para Cumpleaños",
      productos: [
        { nombre: "Pastel Personalizado", imagen: "/imagenesrecomendaciones/pastel_cumple.jpg" },
        { nombre: "Gelatinas Artísticas", imagen: "/imagenesrecomendaciones/gelatinas.jpg" },
        { nombre: "Snack Box para Niños", imagen: "/imagenesrecomendaciones/snack_box.jpg" }
      ]
    },
    {
      id: "aniversarios",
      titulo: "Recomendaciones para Aniversarios",
      productos: [
        { nombre: "Cena Romántica", imagen: "/imagenesrecomendaciones/cena_romantica.jpg" },
        { nombre: "Caja de Bombones", imagen: "/imagenesrecomendaciones/bombones.jpg" },
        { nombre: "Arreglo Floral con Dulces", imagen: "/imagenesrecomendaciones/arreglo_dulces.jpg" }
      ]
    }
  ];

  return (
    <>
      <Header /> {/* Usa el mismo Header */}

      <div className="imagen1">
        <center>
          <img src="/imagenesrecomendaciones/eventos.jpg" width="50%" height="220px" alt="Eventos" />
        </center>
      </div>

      <section className="recomendaciones" id="recomendaciones">
        <h1 className="heading">Nuestras <span>Recomendaciones</span></h1>

        {eventos.map((evento, index) => (
          <div key={index} id={evento.id}>
            <h2 className="category-title">{evento.titulo}</h2>
            <div className="box-container">
              {evento.productos.map((producto, i) => (
                <div className="box" key={i}>
                  <img src={producto.imagen} alt={producto.nombre} />
                  <h3>{producto.nombre}</h3>
                  <button className="btn" onClick={() => enviarWhatsApp(producto.nombre)}>
                    Cotizar en WhatsApp <FontAwesomeIcon icon={faWhatsapp} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

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

      <style>{`
        .heading {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          color: white;
          background: linear-gradient(45deg, #8751a1, #b57edc);
          padding: 20px;
          border-radius: 10px;
          margin: 20px auto;
          width: 60%;
          border: 2px solid #7d4c9e;
        }

        .category-title {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          color: white;
          background: linear-gradient(45deg, #9367b0, #c09fe9);
          padding: 15px;
          border-radius: 30px;
          margin: 20px auto;
          width: 50%;
          border: 2px solid #7d4c9e;
        }

        .box-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .box {
          width: 230px;
          background: #f8f0fc;
          border-radius: 10px;
          padding: 15px;
          text-align: center;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out;
        }

        .box img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 5px;
        }

        .btn {
          background: #4caf50;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Recomendaciones;
