import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <><div className="flex flex-col items-center justify-center min-h-[60vh] px-2 sm:px-4 md:px-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-accent mb-2 sm:mb-4 tracking-tight text-center">Welcome to Inventory Management System</h1>
      <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-8 text-center">Manage your products easily.</p>
      <Link to="/products">
        <button className="bg-accent text-dark font-semibold px-4 sm:px-6 py-2 rounded shadow hover:bg-emerald-400 transition-colors text-base sm:text-lg w-full max-w-xs">Go to Products</button>
      </Link>
    </div><div className="fixed bottom-4 right-4 text-lg sm:text-xl text-gray-300 z-50 select-none pointer-events-none font-semibold drop-shadow">By Aryan Charan</div></>
  );
};

export default Home;
