require('dotenv').config();
const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

console.log("DB_URL:", DB_URL); // Add this line to check if DB_URL is defined
mongoose.connect(DB_URL)
  .then((res) => {
    console.log("MongoDB is connected", res.connections[0].host);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err.message);
    console.error("Error details:", err);
  });


// console.log("mmm")  