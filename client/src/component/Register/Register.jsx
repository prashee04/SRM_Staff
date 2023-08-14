import React from "react";
import "./Register.css";
import "../../App.css";
import { Link } from "react-router-dom";

// assets
import video from "../../LoginAssets/log.mp4";
import logo from "../../LoginAssets/logo.png";

// import icon
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Register = () => {
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">
              SRM Institute Of Science And Technology
              <h2>RAMAPURAM</h2>
            </h2>
            <p>Staff Portal</p>
          </div>

          <div className="footerDiv flex">
            <span className="text"> Have an account? </span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="logo image" />
            <h3>Let Us Know You</h3>
          </div>
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email ID</label>
              <div className="input flex">
                <MdEmail className="icon" />
                <input type="email" id="email" placeholder="Enter Email" />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="Employee_ID">Employee ID</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="Employee_ID"
                  placeholder="Enter User EmployeeID"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="Password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="text" id="Password" placeholder="Enter Password" />
              </div>
            </div>
            <button type="submit" className="btn flex">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            <span className="forgotPassword">
              Forgot yor password? <a href="/register">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
