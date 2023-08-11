import React from "react";
import "./Sidebar.css";
// import img
import logo from "../../assets/logo.png";

// import icon
import { CgProfile } from "react-icons/cg";
import { FaWpforms } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar dgrid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image" />
        <h2>SRM Staff Portal</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">Menu</h3>
        <ul className="menuLists dgrid">
          <li className="listItem">
            <a href="#dashboard" className="menuLink dflex">
              <CgProfile className="dicon" />
              <span className="smallText">Profile</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#appraisal" className="menuLink dflex">
              <FaWpforms className="dicon" />
              <span className="smallText">Appraisal Form</span>
            </a>
          </li>
        </ul>
      </div>{" "}
      <div className="menuDiv">
        <h3 className="divTitle">Menu</h3>
        <ul className="menuLists dgrid">
          <li className="listItem">
            <a href="#dashboard" className="menuLink dflex">
              <CgProfile className="dicon" />
              <span className="smallText">Profile</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#appraisal" className="menuLink dflex">
              <FaWpforms className="dicon" />
              <span className="smallText">Appraisal Form</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">Menu</h3>
        <ul className="menuLists dgrid">
          <li className="listItem">
            <a href="#dashboard" className="menuLink dflex">
              <CgProfile className="dicon" />
              <span className="smallText">Profile</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#appraisal" className="menuLink dflex">
              <FaWpforms className="dicon" />
              <span className="smallText">Appraisal Form</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebarCard">
        <BsQuestionCircle className="dicon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>Having trouble in SRM, please contact us from more question</p>
          <button className="dbtn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
