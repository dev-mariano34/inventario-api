import * as dotenv from 'dotenv';
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Mouse", price: 25, stock: 50 }
];

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Inventory API running" });
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Create product
app.post("/products", (req, res) => {
  const { name, price, stock } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    stock: stock || 0
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update stock
app.patch("/products/:id/stock", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });

  product.stock = req.body.stock;
  res.json(product);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});