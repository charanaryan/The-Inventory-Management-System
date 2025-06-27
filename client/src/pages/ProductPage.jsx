import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/productList';
import ProductForm from '../components/productForm';


const ProductPage = () => {
  const [editableProduct, setEditableProduct] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleSuccess = () => {
    setEditableProduct(null);
    setShowForm(false);
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-start bg-gradient-to-br from-dark via-faded to-dark py-6 sm:py-10 px-2 sm:px-4 md:px-8">
      <div className="w-full max-w-5xl bg-faded rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-8 gap-2 sm:gap-4">
          <h1 className="text-xl sm:text-3xl font-bold text-accent tracking-tight text-center sm:text-left">Product Management</h1>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <Link to="/">
              <button className="bg-accent text-dark font-semibold px-4 sm:px-6 py-2 rounded shadow hover:bg-emerald-400 transition-colors text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-accent w-full sm:w-auto">
                Home
              </button>
            </Link>
            <button
              className="bg-accent text-dark font-semibold px-4 sm:px-6 py-2 rounded shadow hover:bg-emerald-400 transition-colors text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-accent w-full sm:w-auto"
              onClick={() => { setEditableProduct(null); setShowForm(true); }}
            >
              Add Product
            </button>
          </div>
        </div>

        {showForm && (
          <ProductForm
            existingProduct={editableProduct}
            onSuccess={handleSuccess}
          />
        )}

        <ProductList
          onEdit={(product) => {
            setEditableProduct(product);
            setShowForm(true);
          }}
          refreshTrigger={refreshKey}
        />
      </div>
    </div>
  );
};

export default ProductPage;
