const mongoose = require("mongoose");

const connectionString = process.env.DB_URI;
console.log(connectionString);

mongoose
  .connect(connectionString, { connectTimeoutMS: 5000 })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
