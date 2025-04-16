import React from "react";
import TaskList from "./components/TaskList";
import Welcome from "./pages/Welcome";
import TaskForm from "./components/TaskForm";
import TaskEdit from "./components/Taskedit";
import NotificationPanel from "./components/NotificationPanel";
import Calendar from "./pages/Calendar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen w-full p-1">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="/alltask" element={<TaskList />} />
          <Route path="/task/new" element={<TaskForm />} />
          <Route path="/task/edit/:id" element={<TaskEdit />} />
          <Route path="/overdue" element={<NotificationPanel />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
