import express from "express";
import { ENV } from "../backend/config/env.js";

const app = express();

// console.log(PORT);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(ENV.PORT, () => {
  console.log("Server is running on port ", ENV.PORT);
});
