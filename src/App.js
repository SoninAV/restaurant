import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Products from './Pages/Products';
import Basket from './Pages/Basket';
import CurrentProduct from './Pages/CurrentProduct';
import Register from './components/blocks/Register/Register';
import Login from './components/blocks/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/:id" element={<CurrentProduct />} />
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