import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import { useNavigate } from "react-router-dom"; // Import for navigation

const ProductList = ({ setEditProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await deleteProduct(id);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      setError("Error deleting product");
      console.error(err);
    }
  };

  const handleSignout = () => {
    localStorage.removeItem("token"); // Clear token from local storage
    navigate("/login"); // Redirect to login page
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!products || products.length === 0) return <p>No products found.</p>;

  return (
    <div className="product-list-container">
      <div className="header">
        <h2>Product List</h2>
        <button className="signout-btn" onClick={handleSignout}>Sign Out</button>
      </div>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product._id} className="product-item">
            {product.name}
            <div className="product-buttons">
              <button className="edit-btn" onClick={() => setEditProduct(product)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(product._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
