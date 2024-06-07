// src/components/Inicio.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();

  const irAProductos = () => {
    navigate('/productos');
  };

  return (
    <div>
      <h1>Bienvenido a la Tienda Virtual</h1>
      <p>Encuentra los mejores productos aquí.</p>
      <button onClick={irAProductos}>Ver Productos</button>
    </div>
  );
};

export default Inicio;
