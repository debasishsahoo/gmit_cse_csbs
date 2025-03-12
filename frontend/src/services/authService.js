import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/user";

export const signUp = (userData) => axios.post(`${API_URL}/signup`, userData);
export const signIn = (userData) => axios.post(`${API_URL}/signin`, userData);
export const signOut = () => axios.post(`${API_URL}/signout`);
export const isAuthenticated = () => {
    return !!localStorage.getItem("token"); // Returns true if token exists
  };
// Get user details
export const getUser = async (userId) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Change password
export const changePassword = async (userId, oldPassword, newPassword) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}/change-password`,
    { userId, oldPassword, newPassword },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};