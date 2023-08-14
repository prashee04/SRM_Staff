import React from "react";
import "./top.css";

import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";

const Top = () => {
  return (
    <div className="topSection">
      <div className="hearderSection dflex">
        <div className="title">
          <h1>Welcome to SRM STAFF PORTAL</h1>
          <p>Hello "staff name" welcome!!</p>
        </div>

        <div className="searchBar dflex">
          <input type="text" placeholder="Search" />
          <BiSearchAlt className="dicon" />
        </div>

        {/* <div className="adminDiv dflex">
          <TbMessageCircle className="dicon" />
          <IoIosNotificationsOutline className="dicon" />
          <div className="adminImage">
            <img src="" alt="dp" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Top;
