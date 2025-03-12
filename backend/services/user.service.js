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
  LOGIN: async (email, password) => {
    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new Error("Invalid Email..");

    // Compare password using model method
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid Password...");

    // Generate JWT token
    return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });
  },
  VIEW_ALL: async () => {
    return await User.find().select("-password");
  },
  VIEW_SINGLE: async (id) => {
    const user = await User.findById(id).select("-password");
    if (!user) throw new Error("User not found");
    return user;
  },
  CHANGE_PASSWORD: async (userId, oldPassword, newPassword) => {
    const user = await User.findById(userId).select("+password");
    if (!user) throw new Error("User not found");

    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) throw new Error("Incorrect old password");

    user.password = newPassword;
    await user.save();
  },
  DELETE: async (id) => {
    const user = await User.findByIdAndDelete(id);
        if (!user) throw new Error("User not found");
        return user;
  },
  SIGNOUT: async () => {
    return { message: "Logout successful" };
  },
  UPDATE: async (id, updatePayload) => {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");

    if (updatePayload.email && updatePayload.email !== user.email) {
      const emailExists = await User.findOne({
        email: updatePayload.email,
      });
      if (emailExists) throw new Error("Email is already in use");
    }

    Object.assign(user, updatePayload);
    await user.save();

    return user.toJSON();
  },
};

module.exports = userServices;
