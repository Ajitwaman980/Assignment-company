// import model
const taskmodel = require("../model/taskmodel");
const taskSchema_validation = require("../datavalidation");
//all task
const getalltask = async (req, res) => {
  try {
    const tasks = await taskmodel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get by id
const gettaskbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const taskByid = await taskmodel.findById(id);
    if (!taskByid) {
      return res.status(404).json({ message: "task not found" });
    }
    res.status(200).json(taskByid);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// create task
const nwwtask = async (req, res) => {
  try {
    const {
      tasktitle,
      taskdescription,
      taskstatus,
      taskpriority,
      dueDate,
      caategory,
    } = req.body;

    // validate data
    const data_val = taskSchema_validation.safeParse({
      tasktitle,
      taskdescription,
      caategory,
    });
    if (!data_val.success) {
      console.log("data validation error", data_val.error.message);
      return res.status(400).json({ message: data_val.error.message });
    }

    // new data insert into database
    const newtask = new taskmodel({
      tasktitle,
      taskdescription,
      taskstatus,
      taskpriority,
      dueDate,
      caategory,
    });
    await newtask.save();
    res.status(201).json(newtask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update task
const updatetask = async (req, res) => {
  try {
    // getting id
    const id = req.params.id;
    // check by id present or not
    const task = await taskmodel.findById(id);

    // not found
    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }
    const {
      tasktitle,
      taskdescription,
      taskstatus,
      taskpriority,
      dueDate,
      caategory,
    } = req.body;

    const updatedtask = await taskmodel.findByIdAndUpdate(
      id,
      {
        tasktitle,
        taskdescription,
        taskstatus,
        taskpriority,
        dueDate,
        caategory,
      },
      { new: true }
    );

    res.status(200).json(updatedtask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete task
const deletetask = async (req, res) => {
  try {
    // getting id
    const id = req.params.id;
    // check by id present or not
    const task = await taskmodel.findById(id);

    // not found
    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }

    await taskmodel.findByIdAndDelete(id);
    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// complete
const taskCompleted = async (req, res) => {
  try {
    const task = await taskmodel.findByIdAndUpdate(
      req.params.id,
      { taskstatus: "Completed" },
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// over due task
const getDueAndOverdueTasks = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const dueToday = await taskmodel.find({
      dueDate: { $gte: today, $lt: tomorrow },
      taskstatus: { $ne: "Completed" },
    });

    const overdue = await taskmodel.find({
      dueDate: { $lt: today },
      taskstatus: { $ne: "Completed" },
    });

    res.status(200).json({ dueToday, overdue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// upadte duedate task

const updateDueDate = async (req, res) => {
  try {
    const { id } = req.params;
    const { dueDate } = req.body;

    const updatedTask = await taskmodel.findByIdAndUpdate(
      id,
      { dueDate },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// exporting all functions
module.exports = {
  getalltask,
  nwwtask,
  updatetask,
  deletetask,
  gettaskbyid,
  taskCompleted,
  getDueAndOverdueTasks,
  updateDueDate,
};
