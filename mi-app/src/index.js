import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Titulo from './Titulo';
import Tarjeta from './Tarjeta';
import Formulario from './Formulario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Titulo titulo="un titulo"/>
    <Tarjeta titulo="e1" nombre="evy" correo="evynith@gmail.com"/>
    <Formulario/>
  </React.StrictMode>
);

reportWebVitals();
