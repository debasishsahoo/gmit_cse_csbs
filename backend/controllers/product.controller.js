// controllers/product.controller.js
const productServices = require("../services/product.services");

const productController = {
  createProduct: async (req, res) => {
    try {
      const product = await productServices.CREATE(req.body);
      res
        .status(201)
        .json({ message: "Product created successfully", product });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await productServices.GET_ALL();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getProductById: async (req, res) => {
    try {
      const product = await productServices.GET_BY_ID(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const product = await productServices.UPDATE(req.params.id, req.body);
      res
        .status(200)
        .json({ message: "Product updated successfully", product });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await productServices.DELETE(req.params.id);
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = productController;