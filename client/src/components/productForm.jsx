import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './ProductForm.css'; // Include the CSS file if styling is needed

const ProductForm = ({ existingProduct = null, onSuccess }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    supplier: '',
    sales: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    if (existingProduct) {
      setProduct(existingProduct);
    }
  }, [existingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (existingProduct) {
        // Update request
        await axios.put(
          `http://localhost:5000/api/updateproducts/${existingProduct._id}`,
          product
        );
        alert('Product updated successfully!');
      } else {
        // Create request
        await axios.post('http://localhost:5000/api/products', product);
        alert('Product created successfully!');
      }

      onSuccess(); // Refresh parent component (e.g., list)
      setProduct({
        name: '',
        description: '',
        supplier: '',
        sales: '',
        price: '',
        quantity: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-faded rounded-lg shadow p-6 max-w-xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-accent mb-6 text-center">{existingProduct ? 'Update Product' : 'Add Product'}</h2>

      <label className="block mb-2 text-gray-200 font-medium">Product Name:</label>
      <input type="text" name="name" value={product.name} onChange={handleChange} required className="w-full mb-4 px-4 py-2 rounded bg-dark text-white border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition" />

      <label className="block mb-2 text-gray-200 font-medium">Description:</label>
      <textarea name="description" value={product.description} onChange={handleChange} required rows={3} className="w-full mb-4 px-4 py-2 rounded bg-dark text-white border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition" />

      <label className="block mb-2 text-gray-200 font-medium">Supplier:</label>
      <input type="text" name="supplier" value={product.supplier} onChange={handleChange} required className="w-full mb-4 px-4 py-2 rounded bg-dark text-white border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition" />

      <label className="block mb-2 text-gray-200 font-medium">Sales:</label>
      <input type="number" name="sales" value={product.sales} onChange={handleChange} className="w-full mb-4 px-4 py-2 rounded bg-dark text-white border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition" />

      <label className="block mb-2 text-gray-200 font-medium">Price:</label>
      <input type="number" name="price" value={product.price} onChange={handleChange} required className="w-full mb-4 px-4 py-2 rounded bg-dark text-white border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition" />

      <label className="block mb-2 text-gray-200 font-medium">Quantity:</label>
      <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required className="w-full mb-6 px-4 py-2 rounded bg-dark text-white border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition" />

      <button type="submit" className="w-full bg-accent text-dark font-bold py-2 rounded shadow hover:bg-emerald-400 transition-colors text-lg">{existingProduct ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
