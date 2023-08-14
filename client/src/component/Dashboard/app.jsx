import React from "react";
import "./app.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";

const app = () => {
  return (
    <div className="body">
      <div className="dcontainer">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default app;
