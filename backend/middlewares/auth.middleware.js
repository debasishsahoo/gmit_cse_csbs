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


module.exports = {logger };