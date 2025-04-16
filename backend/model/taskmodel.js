const mongoose = require("mongoose");
const { type } = require("os");

// database
const taskschema = new mongoose.Schema(
  {
    tasktitle: {
      type: String,
      required: true,
    },
    taskdescription: {
      type: String,
      required: true,
    },
    taskstatus: {
      type: String,
      enum: ["Completed", "In Progress", "Pending"],
      default: "Pending",
      required: true,
    },
    taskpriority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    caategory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// model
const Taskmodel = mongoose.model("Task", taskschema);

// export
module.exports = Taskmodel;
