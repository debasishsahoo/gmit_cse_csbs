import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import "../App.css"; // Import CSS

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <ProductForm
        refreshProducts={fetchProducts}
        editProduct={editProduct}
        setEditProduct={setEditProduct}
      />
      <ProductList
        products={products}
        refreshProducts={fetchProducts}
        setEditProduct={setEditProduct}
      />
    </div>
  );
};

export default Dashboard;
