import React from "react";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Route path="/completed" element={<CompletedTasks />} />

      <Link to="/completed">Completed Task</Link>

      <Link to="/add-task">Add Task</Link>

      <Link to="/home">Home Page</Link>
    </nav>
  );
};

export default NavBar;
