import React from 'react';
import ReactDOM from 'react-dom';  // Ancienne syntaxe pour React 17
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Utilisez ReactDOM.render() pour React 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si vous souhaitez mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à un endpoint d'analytique. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
