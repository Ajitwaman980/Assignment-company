const mongoose = require("mongoose");

// connecting to the database
mongoose
  .connect("mongodb://localhost/assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });
