import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const UserTasks = () => {
    const { id } = useParams(); // Get user id from URL params
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchUserTasks() {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${id}/tasks`);
                setTasks(response.data);
            } catch (error) {
                console.error("Failed to fetch tasks:", error);
            }
        }
        fetchUserTasks();
    }, [id]);

    return (
        <div>
            <h2>User {id}'s Tasks</h2>
            {tasks.length === 0 ? (
                <p>No tasks found for this user.</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <strong>{task.title}</strong>: {task.description} [{task.completed ? "Done" : "Pending"}]
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserTasks;
