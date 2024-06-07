// src/components/ProductoDetalle.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CarritoContext } from '../CarritoContext';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{producto.title}</h1>
      <img src={producto.image} alt={producto.title} style={{ width: '200px', height: '200px' }} />
      <p>{producto.description}</p>
      <p>${producto.price}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductoDetalle;
