import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Hacer de los dulces un arte</h3>
        <p>Bocaditos "Rosita" te da la más cordial bienvenida a su página web en la que podrás encontrar una gran variedad de productos.</p>
        <Link to="/menu" className="btn">Get Yours</Link>
      </div>
    </section>
  );
};

export default Home;
