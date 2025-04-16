const express = require("express");
const router = express.Router();
const {
  getalltask,
  nwwtask,
  updatetask,
  deletetask,
  gettaskbyid,
  taskCompleted,
  getDueAndOverdueTasks,
  updateDueDate,
} = require("../controller/taskController");
// task router

// get all task
router.get("/all", getalltask);
// by id
router.get("/task/:id", gettaskbyid);
// new
router.post("/new", nwwtask);
// complete task
router.get("/complete/:id", taskCompleted);
// update task
router.put("/update/:id", updatetask);
// delete task
router.delete("/delete/:id", deletetask);

// over due task
router.get("/overdue", getDueAndOverdueTasks);
// update due date
router.put("/updateDueDate/:id", updateDueDate);

module.exports = router;
