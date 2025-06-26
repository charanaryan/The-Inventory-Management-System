import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-accent mb-4 tracking-tight">Welcome to Inventory Management System</h1>
      <p className="text-lg text-gray-300 mb-8">Manage your products easily.</p>
      <Link to="/products">
        <button className="bg-accent text-dark font-semibold px-6 py-2 rounded shadow hover:bg-emerald-400 transition-colors text-lg">Go to Products</button>
      </Link>
    </div>
  );
};

export default Home;
