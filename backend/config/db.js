const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    const conn = await mongoose.connect(uri, {});
    console.log("MongoDB connected successfully");
    return conn.connection.host;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = connectDB;
