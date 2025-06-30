import React from "react";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">All Tasks</Link>
      <Link to="/completed">Completed Task</Link>
      <Link to="/incomplete">Incomplete Task</Link>
      <Link to="/add-task">Add Task</Link>
      <Link to="/home">Users</Link>
    </nav>
  );
};

export default NavBar;

