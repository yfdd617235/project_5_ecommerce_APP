import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/cartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Router>
  <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </UserProvider>
</Router>
);

