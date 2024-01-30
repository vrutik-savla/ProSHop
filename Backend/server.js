// 13. Express Server & Initial Product Routes
// const express = require('express');
import express from "express";
// 19. Connect With Mongoose
import connectDB from "./config/db.js";
// 15. Environment Variables
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); //Connect to MongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
