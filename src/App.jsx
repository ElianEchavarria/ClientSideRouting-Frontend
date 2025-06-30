import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import CompletedTasks from "./components/CompletedTasks";
import InCompletedTasks from "./components/InCompletedTasks";
import HomePage from "./components/Users";
import TaskDetail from "./components/TaskDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const [tasks, setTasks] = useState([]);

  async function fetchAllTasks() {
    try {
      const response = await axios.get("http://localhost:8080/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} fetchAllTasks={fetchAllTasks} />}
        />
        <Route path="/completed" element={<CompletedTasks />} />
        <Route path="/incomplete" element={<InCompletedTasks />} />
        <Route
          path="/add-task"
          element={<AddTask fetchAllTasks={fetchAllTasks} />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />

      </Routes>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

