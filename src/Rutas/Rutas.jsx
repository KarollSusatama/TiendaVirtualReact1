// src/rutas.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Productos from '../components/Productos';
import Carrito from '../components/Carrito';
import Contacto from '../components/Contacto';
import NoEncontrado from '../components/NoEncontrado';


const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
