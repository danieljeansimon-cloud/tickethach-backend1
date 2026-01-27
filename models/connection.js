const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://danieljeansimon:Wayne93100@cluster0.m7tpuf1.mongodb.net/tickethach/backend";

mongoose
  .connect(connectionString, { connectTimeoutMS: 1000 })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
