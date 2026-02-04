import express from "express";
import { userapp } from "./APIs/userApi.js";
import { productapp } from "./APIs/productApi.js";

const app = express();

// body parsing middleware
app.use(express.json());

// routes
app.use("/user-api", userapp);
app.use("/product-api", productapp);

// start server
app.listen(3000, () =>
  console.log("HTTP SERVER LISTENING ON PORT 3000...")
);