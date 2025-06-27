import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ProductDetails from './components/productDetails';

const App = () => {
  return (
    <div className="min-h-screen bg-dark text-white p-4 sm:p-6 md:p-8">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

