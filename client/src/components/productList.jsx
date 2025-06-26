import React, { useEffect, useState } from 'react';
// If you have Heroicons installed, you can use:
// import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/getallproducts');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a product
  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this product?');
    if (!confirm) return;

    try {
      const response = await fetch(`http://localhost:5000/api/deleteproducts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts(products.filter((product) => product._id !== id));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-400">Loading products...</p>;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-accent mb-4 text-center">Product Inventory</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-400">No products found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-faded text-white rounded-lg text-sm">
            <thead>
              <tr>
                <th className="py-2 px-3 bg-accent text-dark font-bold">Name</th>
                <th className="py-2 px-3 bg-accent text-dark font-bold">Description</th>
                <th className="py-2 px-3 bg-accent text-dark font-bold">Supplier</th>
                <th className="py-2 px-3 bg-accent text-dark font-bold">Sales</th>
                <th className="py-2 px-3 bg-accent text-dark font-bold">Price</th>
                <th className="py-2 px-3 bg-accent text-dark font-bold">Quantity</th>
                <th className="py-2 px-3 bg-accent text-dark font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr key={product._id} className={
                  `transition-colors ${idx % 2 === 0 ? 'bg-dark' : 'bg-faded'} hover:bg-emerald-950/40`
                }>
                  <td className="py-2 px-3 text-center align-middle">{product.name}</td>
                  <td className="py-2 px-3 text-center align-middle">{product.description}</td>
                  <td className="py-2 px-3 text-center align-middle">{product.supplier}</td>
                  <td className="py-2 px-3 text-center align-middle">{product.sales}</td>
                  <td className="py-2 px-3 text-center align-middle text-accent font-semibold">&#8377;{product.price}</td>
                  <td className="py-2 px-3 text-center align-middle">{product.quantity}</td>
                  <td className="py-2 px-3 text-center align-middle">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="bg-accent text-dark font-semibold px-3 py-1 rounded shadow hover:bg-emerald-400 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-accent flex items-center gap-1"
                        onClick={() => onEdit(product)}
                        title="Edit"
                      >
                        
                        <span className="hidden sm:inline">Edit</span>
                      </button>
                      <button
                        className="bg-red-500 text-white font-semibold px-3 py-1 rounded shadow hover:bg-red-600 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center gap-1"
                        onClick={() => handleDelete(product._id)}
                        title="Delete"
                      >
                        
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductList;
