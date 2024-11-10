import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Use apenas no index.js
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
