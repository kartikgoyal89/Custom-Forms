import React from "react";
import "./header.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiSave } from "react-icons/fi";
import { MdOutlinePublish } from "react-icons/md";

const Header = () => {
  return (
    <div className="header-container">
      <div className="upper">
        <div className="left">
          <div className="logo">
            <img src="./logo.png" alt="" />
          </div>
          <h6>FORMER</h6>
        </div>
        <div className="right">
          <div className="new-btn">New Form</div>
          <div className="avatar">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lower">
        <button className="btn_">
          <FiSave className="me-1 icon" />
          Save
        </button>
        <button className="btn_">
          <MdOutlineRemoveRedEye className="me-1 icon" />
          Preview
        </button>
        <button className="btn_">
          <MdOutlinePublish className="me-1 icon" />
          Publish
        </button>
      </div>
    </div>
  );
};

export default Header;
