// 13. Express Server & Initial Product Routes
// const express = require('express');
import express from "express";
// 19. Connect With Mongoose
import connectDB from "./config/db.js";
// 15. Environment Variables
import dotenv from "dotenv";
// 24. Get Products From Database
import productRoutes from "./routes/productRoutes.js";
// 25. Custom Error Middleware
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;
connectDB(); //Connect to MongoDB
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// 24. Get Products From Database
app.use("/api/products", productRoutes);

// 25. Custom Error Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
