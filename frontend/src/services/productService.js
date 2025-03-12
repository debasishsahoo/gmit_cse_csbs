import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/product";

// Get token from localStorage
const getAuthToken = () => localStorage.getItem("token");

// Fetch all products
export const getProducts = async () => {
  const token = getAuthToken();
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Add new product
export const addProduct = async (productData) => {
  const token = getAuthToken();
  const response = await axios.post(API_URL, productData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update existing product
export const updateProduct = async (productId, productData) => {
  const token = getAuthToken();
  const response = await axios.put(`${API_URL}/${productId}`, productData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Delete product
export const deleteProduct = async (productId) => {
  const token = getAuthToken();
  const response = await axios.delete(`${API_URL}/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
