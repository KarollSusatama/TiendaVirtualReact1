// src/components/Carrito.jsx
import React, { useContext } from 'react';
import { CarritoContext } from '../CarritoContext';

const Carrito = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((producto, index) => (
            <li key={index}>
              <h2>{producto.title}</h2>
              <img src={producto.image} alt={producto.title} style={{ width: '50px', height: '50px' }} />
              <p>${producto.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
