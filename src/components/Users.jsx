import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const Users = () => {
    const [users, setUsers] = useState([]);

    async function fetchAllUsers() {
        try {
            const response = await axios.get("http://localhost:8080/api/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, []);




    return (
        <div className="task-card">
            <div className="task-card-header">
                <h1>Users List</h1>
                {users.map((user) => (
                    <div key={user.id}>
                        <Link to={`/users/${users.id}`}>{user.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users
