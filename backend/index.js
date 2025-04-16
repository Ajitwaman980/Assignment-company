// server
const express = require("express");
const cors = require("cors");
const limiter = require("./middleware/rate_limit");
const bodyParser = require("body-parser");
const app = express();
const connnection = require("./config/connection");
const taskRouter = require("./routes/taskRouter");
const port = 3000;

//
// middleware
app.use(bodyParser.json());

// cors for frontend interaction
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//  router
app.use("/task", limiter, taskRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
