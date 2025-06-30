import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./TaskDetailStyles.css";


const TaskDetail = () => {
  const { id } = useParams();  
  const [task, setTask] = useState(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        const res = await axios.get(`http://localhost:8080/api/tasks/${id}`);
        setTask(res.data);
      } catch (err) {
        console.error("Failed to fetch task:", err);
      }
    }

    fetchTask();
  }, [id]);

  if (!task) return <p>Loading task...</p>;

  return (
  <div className="task-detail">
    <h2>{task.title}</h2>
    <p><strong>Description:</strong> {task.description}</p>
    <p><strong>Completed:</strong> {task.completed ? "Yes" : "No"}</p>
    <p><strong>Assigned To:</strong> {task.user?.name || "No user assigned"}</p>
  </div>
);

};

export default TaskDetail;
