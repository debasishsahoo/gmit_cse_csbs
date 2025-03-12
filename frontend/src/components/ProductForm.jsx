import { useState, useEffect } from "react";
import { addProduct, updateProduct } from "../services/productService";

const ProductForm = ({ refreshProducts, editProduct, setEditProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  // Populate fields when editing
  useEffect(() => {
    if (editProduct) {
      setFormData({
        name: editProduct.name || "",
        description: editProduct.description || "",
        price: editProduct.price || "",
        stock: editProduct.stock || "",
      });
    }
  }, [editProduct]);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.stock)
      return alert("Please fill in all required fields");

    try {
      if (editProduct) {
        await updateProduct(editProduct._id, formData);
        setEditProduct(null); // Clear edit mode
      } else {
        await addProduct(formData);
      }

      setFormData({ name: "", description: "", price: "", stock: "" });
      refreshProducts(); // Refresh product list
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  return (
    <div className="product-form-container">
      <h2>{editProduct ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <div className="button-group">
          <button type="submit">
            {editProduct ? "Update" : "Add"} Product
          </button>
          {editProduct && (
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setEditProduct(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
