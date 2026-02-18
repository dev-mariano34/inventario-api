const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Inventory API running" });
});

app.use("/products", productRoutes);

const errorHandler = require("./middleware/error.middleware");
app.use(errorHandler);

module.exports = app;
