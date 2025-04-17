import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function TaskForm() {
  // form validation using react-hook-form
  const {
    register, // register used for input
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const submit = async (data) => {
    try {
      console.log("this is form data", data);
      const res = await axios.post(
        "https://assignment-company.onrender.com/task/new",
        data,
        {
          withCredentials: true,
        }
      );
      //  status code 201 ok
      if (res.status === 201) {
        console.log("Task created successfully:", res.data);
        alert("Task created!");
        navigate("/alltask"); // redirect to all task page
      }
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 text-center  p-2">
        Create new task
      </h1>
      <form onSubmit={handleSubmit(submit)} className="p-4  space-y-4">
        <label className="text-sm text-black">task title </label>
        <input
          type="text"
          name="tasktitle"
          {...register("tasktitle", { required: true })} // register input
          className="w-full border px-3 py-2 rounded"
          required
        />
        <label className="text-sm text-black">task description </label>
        <textarea
          name="taskdescription"
          {...register("taskdescription", { required: true })} // register input
          className="w-full border px-3 py-2 rounded"
          required
        />
        <label className="text-sm text-black">task status </label>

        <select
          {...register("taskstatus", { required: true })}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Pending">Pending</option>In Progress
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
        </select>

        <label>task priority </label>
        <select
          name="taskpriority"
          {...register("taskpriority", { required: true })}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label className="text-sm text-black">due Date </label>
        <input
          type="date"
          name="dueDate"
          {...register("dueDate", { required: true })}
          className="w-full border px-3 py-2 rounded"
        />
        <label className="text-sm text-black">category </label>
        <input
          type="text"
          {...register("caategory", { required: true })}
          className="w-full border px-3 py-2 rounded"
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 ">
          Create Task
        </button>
      </form>
    </>
  );
}

export default TaskForm;
