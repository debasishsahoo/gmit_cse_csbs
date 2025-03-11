import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/user";

export const signUp = (userData) => axios.post(`${API_URL}/signup`, userData);
export const signIn = (userData) => axios.post(`${API_URL}/signin`, userData);
export const signOut = () => axios.post(`${API_URL}/signout`);
export const isAuthenticated = () => {
    return !!localStorage.getItem("token"); // Returns true if token exists
  };
