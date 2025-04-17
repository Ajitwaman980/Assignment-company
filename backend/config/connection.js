const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// connecting to the database
mongoose
  .connect(process.env.MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });
// mongodb+srv://ajitwaman43:PE2mevwSa0jOZQqh@cluster0.rjp5lre.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://ajitwaman43:admin123@cluster0.rjp5lre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
