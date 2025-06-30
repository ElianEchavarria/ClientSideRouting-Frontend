import React from "react";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Currently, we're using <a> tags to navigate to different pages.
      This means that every time we click on a link, the page will reload.
      Let's fix that!
      */}
      <a href="/">All Tasks</a>
      <a href="/completed">Completed Tasks</a>
      <a href="/incomplete">Incomplete Tasks</a>
      <a href="/add-task">Add Task</a>
      <a href="/users">Users</a>
    </nav>
  );
};

export default NavBar;
