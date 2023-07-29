import React from "react";
import logo from "../icons/LOGO.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="top-line">
      <div className="container-1">
        <div className="logo-side">
          <img src={logo} className="logo" />
          <div className="courses">
            <p>Courses</p>
            <RiArrowDropDownLine size={30} className="courses-icon" />
          </div>
          <div className="courses">
            <p>Programs</p>
            <RiArrowDropDownLine size={30} />
          </div>
        </div>
        <div className="other-side">
          <AiOutlineSearch />
          <div>Log in</div>
          <div className="btn">
            <p>JOIN NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
