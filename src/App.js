import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Producto from './components/Producto';
import Registro from './components/Registro';
import Login from './components/Login';
import Actualizar from './components/Actualizar';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/actualizar" element={<Actualizar />} />
      </Routes>
    </Router>
  );
};

export default App;
