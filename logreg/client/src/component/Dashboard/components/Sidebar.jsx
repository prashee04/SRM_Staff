import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import your CSS file for sidebar styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/appraisal">Appraisal</Link>
        </li>
        {/* Add more menu items */}
      </ul>
    </div>
  );
};

export default Sidebar;
