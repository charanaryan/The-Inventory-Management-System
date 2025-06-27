import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://the-inventory-management-system-server-ksgy.onrender.com/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // ✅ only depends on 'id'

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (!product) return <p className="text-center text-red-400">Product not found</p>;

  return (
    <div className="bg-faded rounded-lg shadow p-8 max-w-xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-accent mb-6 text-center">{product.name}</h2>
      <p className="mb-3 text-gray-200"><span className="font-semibold text-accent">Description:</span> {product.description}</p>
      <p className="mb-3 text-gray-200"><span className="font-semibold text-accent">Supplier:</span> {product.supplier}</p>
      <p className="mb-3 text-gray-200"><span className="font-semibold text-accent">Sales:</span> {product.sales}</p>
      <p className="mb-3 text-gray-200"><span className="font-semibold text-accent">Price:</span> <span className="text-accent">&#8377;{product.price}</span></p>
      <p className="mb-3 text-gray-200"><span className="font-semibold text-accent">Quantity:</span> {product.quantity}</p>
    </div>
  );
};

export default ProductDetails;

