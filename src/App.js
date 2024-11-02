import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products';
import Basket from './Pages/Basket';
import CurrentProduct from './Pages/CurrentProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/:id" element={<CurrentProduct />} />
      </Routes>
    </Router>
  );
}

export default App;