// import mongoose from "mongoose";

// export const connectdb = () => {
//     mongoose.connect(process.env.mongodb_uri, {
//         dbName: "backendapi",
        
//     }).then((connection) => {
//         console.log(`Database connected successfully with host: ${connection.connection.host}`);
//     }).catch((error) => {
//         console.error('Error connecting to database:', error);
//     });
// };


// import mongoose from "mongoose";

// export const connectdb = () => {
//     mongoose.connect(process.env.mongodb_uri, {
//         dbName: "news_api",
        
//     }).then((connection) => {
//         console.log(`Database connected successfully with host: ${connection.connection.host}`);
//     }).catch((error) => {
//         console.error('Error connecting to database:', error);
//     });
// };


const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri, {
      dbName: "news_api",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

module.exports = { connectdb };

