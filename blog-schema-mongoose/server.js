import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import blogRoute from "./routes/blogRoute.js";
import userRoute from "./routes/userRoute.js";
import commentsRoute from "./routes/commentsRoute.js";

const app = express();
app.use(express.json());

app.use("/api", blogRoute);
app.use("/api", userRoute);
app.use("/api", commentsRoute);

mongoose.connect(process.env.CONNECTION_URI).then(() => {
  app.listen(9999, () => {
    console.log(`Listening on port 9999`);
  });
});
