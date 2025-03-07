const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET;
const SALT = parseInt(process.env.SALT, 10);

const userServices = {
  INSERT: async (userPayload) => {
    const { email } = userPayload;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists");
    return await User.create(userPayload);
  },







  
  LOGIN: async () => {},
  VIEW_ALL: async () => {},
  VIEW_SINGLE: async () => {},
  UPDATE: async () => {},
  DELETE: async () => {},
  CHANGE_PASSWORD: async () => {},
};

module.exports = userServices;
