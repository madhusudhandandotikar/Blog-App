const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  "mongodb+srv://madhusudhandandotikar:9SF7C3R5gcviCxKh@cluster0.d2p6g.mongodb.net/mydatabase?retryWrites=true&w=majority";
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use(cors());

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
