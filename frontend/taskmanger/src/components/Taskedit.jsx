import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const TaskEdit = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({});

  const editTask = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/task/update/${id}`,
        data,
        { withCredentials: true }
      );
      console.log("this is form data", data);
      if (response.status === 200) {
        alert("Task updated!");
        navigate("/alltask");
      }
    } catch (err) {
      console.log(err);
      alert("Error updating task.");
      navigate("/alltask");
    }
  };

  // fetch by id
  useEffect(() => {
    const getbyid = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/task/task/${id}`,
          {
            withCredentials: true,
          }
        );
        // console.log("this is task data", response.data);
        if (response.status === 200) {
          console.log(response.data);
          setTask(response.data);
          // set value to the form
          setValue("tasktitle", response.data.tasktitle);
          setValue("taskdescription", response.data.taskdescription);
          setValue("taskstatus", response.data.taskstatus);
          setValue("taskpriority", response.data.taskpriority);
          setValue("dueDate", response.data.dueDate.split("T")[0]);
          setValue("caategory", response.data.caategory);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getbyid();
  }, [id, setValue]);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 text-center p-2">
        Update Task
      </h1>
      <form onSubmit={handleSubmit(editTask)} className="p-4 space-y-4">
        <label className="text-sm text-black">Task Title</label>
        <input
          type="text"
          {...register("tasktitle")}
          className="w-full border px-3 py-2 rounded"
        />

        <label className="text-sm text-black">Task Description</label>
        <textarea
          {...register("taskdescription")}
          className="w-full border px-3 py-2 rounded"
        />

        <label className="text-sm text-black">Task Status</label>
        <select
          {...register("taskstatus")}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <label className="text-sm text-black">Task Priority</label>
        <select
          {...register("taskpriority")}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label className="text-sm text-black">Due Date</label>
        <input
          type="date"
          {...register("dueDate")}
          className="w-full border px-3 py-2 rounded"
        />

        <label className="text-sm text-black">Category</label>
        <input
          type="text"
          {...register("caategory")}
          className="w-full border px-3 py-2 rounded"
        />

        <button type="submit" className="w-full bg-blue-600 text-white p-2">
          Edit Task
        </button>
      </form>
    </>
  );
};

export default TaskEdit;
