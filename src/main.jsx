import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
