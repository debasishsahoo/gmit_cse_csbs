// services/product.services.js
const Product = require("../models/product.model");

const productServices = {
  CREATE: async (productData) => {
    return await Product.create(productData);
  },
  GET_ALL: async () => {
    return await Product.find();
  },
  GET_BY_ID: async (id) => {
    const product = await Product.findById(id);
    if (!product) throw new Error("Product not found");
    return product;
  },
  UPDATE: async (id, updateData) => {
    const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
    if (!product) throw new Error("Product not found");
    return product;
  },
  DELETE: async (id) => {
    const product = await Product.findByIdAndDelete(id);
    if (!product) throw new Error("Product not found");
    return product;
  },
};

module.exports = productServices;