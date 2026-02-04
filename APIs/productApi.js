import express from "express";

export const productapp = express.Router();

// in-memory data
let products = [];

// GET all products
productapp.get("/products", (req, res) => {
  res.json({ message: "all products", payload: products });
});

// GET product by ID
productapp.get("/products-id/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.productId === id);

  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  res.status(200).json({ message: "product found", payload: product });
});

// GET product by name
productapp.get("/products-name/:name", (req, res) => {
  const name = req.params.name;
  const product = products.find(p => p.name === name);

  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  res.status(200).json({ message: "product found", payload: product });
});

// ADD product
productapp.post("/products", (req, res) => {
  products.push(req.body);
  res.status(201).json({ message: "product added", payload: products });
});

// UPDATE product
productapp.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.productId === id);

  if (index === -1) {
    return res.status(404).json({ message: "product not found" });
  }

  products.splice(index, 1, req.body);
  res.status(200).json({ message: "product updated", payload: products });
});

// DELETE product
productapp.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.productId === id);

  if (index === -1) {
    return res.status(404).json({ message: "product not found" });
  }

  products.splice(index, 1);
  res.status(200).json({ message: "product deleted", payload: products });
});