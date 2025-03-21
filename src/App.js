import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Menu from './components/Menu';
import Recomendaciones from './components/Recomendaciones';
import Nosotros from './components/Nosotros';
import Categorias from './components/Categorias'; // Importar el nuevo componente

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<Contacto />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/categorias" element={<Categorias />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default App;
