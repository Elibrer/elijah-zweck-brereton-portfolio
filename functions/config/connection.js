const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/elijah-zweck-brereton-portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/elijah-zweck-brereton-portfolio', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// const db = mongoose.connection;

// // Event listener for successful connection
// db.on("connected", () => {
//   console.log("Connected to MongoDB Atlas");
// });

// // Event listener for connection error
// db.on("error", (err) => {
//   console.error("Error connecting to MongoDB Atlas:", err);
// });

// module.exports = db;
