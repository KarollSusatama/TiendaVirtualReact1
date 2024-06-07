// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CarritoProvider from './CarritoContext';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </React.StrictMode>
);
