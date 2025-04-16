const zod = require("zod");

//  data validation
const taskSchema_validation = zod.object({
  tasktitle: zod.string().min(1, "Task title is required"),
  taskdescription: zod.string().min(1, "Task description is required"),
  caategory: zod.string().min(1, "Category is required"),
});

// export
module.exports = taskSchema_validation;
