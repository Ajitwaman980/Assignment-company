// src/components/TaskList.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { editTask } from "./Taskedit";
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const alltask = async () => {
    try {
      const response = await axios.get(
        "https://assignment-company.onrender.com/task/all"
      );
      if (response.status === 200) {
        setTasks(response.data);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `https://assignment-company.onrender.com/task/delete/${id}`
      );
      if (response.status === 200) {
        alert("Task deleted successfully!");
        alltask();
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // completed task

  const completedTask = async (id) => {
    try {
      const response = await axios.get(
        `https://assignment-company.onrender.com/task/complete/${id}`
      );
      if (response.status === 200) {
        alert("Task completed successfully!");
        alltask();
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };
  // user effect to get all task from the backend
  useEffect(() => {
    alltask();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-4 py-2">Task Title</th>
              <th className="border px-4 py-2">Task Description</th>
              <th className="border px-4 py-2">Task Status</th>
              <th className="border px-4 py-2">Task Priority</th>
              <th className="border px-4 py-2">Due Date</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">edit</th>
              <th className="border px-4 py-2">delete</th>
              <th className="border px-4 py-2">Completed</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="">
                <td className="border px-4 py-2">{task.tasktitle}</td>
                <td className="border px-4 py-2">{task.taskdescription}</td>
                <td className="border px-4 py-2">{task.taskstatus}</td>
                <td className="border px-4 py-2">{task.taskpriority}</td>
                <td className="border px-4 py-2">
                  {new Date(task.dueDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">{task.caategory}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => {
                      // <Link to={`/task/edit/${task._id}`}>edit</Link>;
                      navigate(`/task/edit/${task._id}`);
                      console.log("this is task id", task._id);
                    }}
                    className="bg-blue-400 p-2"
                  >
                    edit
                  </button>
                </td>
                <td className="border px-4 py-2 ">
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="bg-red-400 p-2"
                  >
                    delete
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={function () {
                      completedTask(task._id);
                    }}
                    className="bg-green-400 p-2"
                  >
                    Completed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/task/new">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Create New Task
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TaskList;
