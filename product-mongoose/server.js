import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/productRoute.js";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/api", productRoute);

mongoose.connect(process.env.CONNECT_URI).then(() => {
  app.listen(9999, () => {
    console.log(`Listening on port 9999`);
  });
});
