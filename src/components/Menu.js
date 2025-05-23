import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from './Header'; // Importando el Header externo

const Menu = () => {
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
    const mensaje = `Hola, me gustaría cotizar el producto: *${producto}*. ¿Podrían darme más información?`;
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  // Datos de las categorías y productos
  const categorias = [
    {
      id: "hojaldre",
      titulo: "Bocaditos de Hojaldre",
      productos: [
        { nombre: "Caracoles Grandes", imagen: "/imagenbocaditos/caracolesg.jpg" },
        { nombre: "Palitos de Queso", imagen: "/imagenbocaditos/palitosqueso.jpg" },
        { nombre: "Empanadas de Hojaldre", imagen: "/imagenbocaditos/empanadas.jpg" },
        { nombre: "Palitos de Queso", imagen: "/imagenbocaditos/palitosqueso.jpg" },
        { nombre: "Palitos de Queso", imagen: "/imagenbocaditos/palitosqueso.jpg" },
        { nombre: "Palitos de Queso", imagen: "/imagenbocaditos/palitosqueso.jpg" },
        { nombre: "Palitos de Queso", imagen: "/imagenbocaditos/palitosqueso.jpg" }
      ]
    },
    {
      id: "especiales",
      titulo: "Bocaditos Especiales",
      productos: [
        { nombre: "Volovanes de Carne", imagen: "/imagenbocaditos/volovanes.jpg" },
        { nombre: "Mini Pizzas", imagen: "/imagenbocaditos/minipizzas.jpg" }
      ]
    },
    {
      id: "postres",
      titulo: "Postres",
      productos: [
        { nombre: "Cupcakes", imagen: "/imagenbocaditos/cupcakes.jpg" },
        { nombre: "Brownies", imagen: "/imagenbocaditos/brownies.jpg" }
      ]
    },
    {
      id: "reposteria",
      titulo: "Repostería",
      productos: [
        { nombre: "Alfajores", imagen: "/imagenbocaditos/alfajores.jpg" },
        { nombre: "Cheesecake", imagen: "/imagenbocaditos/cheesecake.jpg" }
      ]
    }
  ];

  return (
    <>
      <Header /> {/* Ahora el Header es un componente separado */}

      <div className="imagen1">
        <center>
          <img src="/imagenbocaditos/kupi.gif" width="50%" height="220px" alt="" />
        </center>
      </div>

      <section className="menu" id="menu">
        <h1 className="heading">Nuestro <span>Menú</span></h1>

        {categorias.map((categoria, index) => (
          <div key={index} id={categoria.id}>
            <h2 className="category-title">{categoria.titulo}</h2>
            <div className="box-container">
              {categoria.productos.map((producto, i) => (
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

export default Menu;
