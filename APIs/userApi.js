import express from "express";

export const userapp = express.Router();

// in-memory data
let users = [];

// GET all users
userapp.get("/users", (req, res) => {
  res.status(200).json({ message: "all users", payload: users });
});

// CREATE user
userapp.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json({ message: "user created", payload: users });
});

// UPDATE user
userapp.put("/users", (req, res) => {
  const updatedUser = req.body;
  const index = users.findIndex(u => u.id === updatedUser.id);

  if (index === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  users.splice(index, 1, updatedUser);
  res.status(200).json({ message: "user updated", payload: users });
});

// GET user by ID
userapp.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  res.status(200).json({ message: "user found", payload: user });
});

// DELETE user
userapp.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  users.splice(index, 1);
  res.status(200).json({ message: "user deleted", payload: users });
});