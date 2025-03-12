const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Create a write stream (in append mode) for logging
const logStream = fs.createWriteStream(path.join(__dirname, "../logs/access.log"), 
{ flags: "a" });
// Morgan setup
const logger = morgan("combined", { stream: logStream });

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token
    if (!token) return res.status(401).json({ error: "Unauthorized: No token provided" });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: "Invalid token." });
    }
  };

module.exports = {authMiddleware,logger };