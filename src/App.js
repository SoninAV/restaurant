import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Products from './Pages/Products';
import Basket from './Pages/Basket';
import CurrentProduct from './Pages/CurrentProduct';
import Register from './components/blocks/Register/Register';
import Login from './components/blocks/Login/Login';
import Private from './components/blocks/Private';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Private Component={Products} />} />
        <Route path="/basket" element={<Private Component={Basket} />} />
        <Route path="/:id" element={<Private Component={CurrentProduct} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/products" replace /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;