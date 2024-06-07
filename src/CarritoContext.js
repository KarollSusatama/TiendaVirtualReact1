// src/CarritoContext.js
import React, { createContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    // Redirigir al usuario al carrito después de agregar un producto
    return <Navigate to="/carrito" />;
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
