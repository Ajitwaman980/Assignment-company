import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationPanel = () => {
  const [dueToday, setDueToday] = useState([]);
  const [overdue, setOverdue] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/task/overdue", {
          withCredentials: true,
        });
        const { dueToday, overdue } = res.data;
        setDueToday(dueToday);
        setOverdue(overdue);

        overdue.forEach((task) => {
          toast.error(`Overdue: ${task.tasktitle}`);
        });

        dueToday.forEach((task) => {
          toast.info(`Due Today: ${task.tasktitle}`);
        });
      } catch (err) {
        console.error("Failed to fetch tasks", err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md mt-6 shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Task Notifications
      </h2>

      <div className="mb-4">
        <h3 className="text-green-600 font-medium">Due Today</h3>
        <ul className="list-disc list-inside text-sm mt-1">
          {dueToday.length === 0 ? (
            <li className="text-gray-500">No tasks due today.</li>
          ) : (
            dueToday.map((task) => <li key={task._id}>{task.tasktitle}</li>)
          )}
        </ul>
      </div>

      <div>
        <h3 className="text-red-600 font-medium">Overdue</h3>
        <ul className="list-disc list-inside text-sm mt-1">
          {overdue.length === 0 ? (
            <li className="text-gray-500">No overdue tasks.</li>
          ) : (
            overdue.map((task) => <li key={task._id}>{task.tasktitle}</li>)
          )}
        </ul>
      </div>

      <ToastContainer />
    </div>
  );
};

export default NotificationPanel;
