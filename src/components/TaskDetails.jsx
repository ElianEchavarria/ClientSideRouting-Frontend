import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const TaskDetails = ({ tasks }) => {
    const { id } = useParams();
    const taskId = Number(id);

    const [task, setTask] = useState(null);

    useEffect(() => {
        if (tasks && tasks.length > 0) {
            const localTask = tasks.find((t) => t.id === taskId);
            if (localTask) {
                setTask(localTask);
            }
        } else {
            axios.get(`/api/tasks/${taskId}`)
                .then((res) => setTask(res.data))
                .catch((err) => console.error("Error fetching task:", err));
        }
    }, [tasks, taskId]);


    if (!task) return <p>Loading task...</p>;

    return (
        <div className="task-card">
            <div className="task-card-header">
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <p>{task.completed ? "✅ Completed" : "❌ Incomplete"}</p>
                <p>Assigned to: {task.user?.name || "Unknown"}</p>
            </div>
        </div>
    )



}

export default TaskDetails;