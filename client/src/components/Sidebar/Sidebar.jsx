import React, { useState } from "react";
import "./sidebar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiSearch } from "react-icons/ci";
import { FaHeading } from "react-icons/fa6";
import { TfiText } from "react-icons/tfi";
import { FiFileText } from "react-icons/fi";
import { TbNumbers } from "react-icons/tb";
import { useDraggable } from "@dnd-kit/core";
import { AiOutlineUser } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import { PiMapPinBold } from "react-icons/pi";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const DraggableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

const Sidebar = () => {
  const [menu, setMenu] = useState("basic");
  return (
    <>
      <div className="sidebar-container">
        <Slider {...settings}>
          <div className="item">
            <button
              className={menu === "basic" ? "active" : ""}
              onClick={() => setMenu("basic")}
            >
              <p className="mb-0">Basic</p>
            </button>
          </div>
          <div className="item">
            <button
              className={menu === "personal" ? "active" : ""}
              onClick={() => setMenu("personal")}
            >
              <p className="mb-0">Personal</p>
            </button>
          </div>
          <div className="item">
            <button
              className={menu === "date-time" ? "active" : ""}
              onClick={() => setMenu("date-time")}
            >
              <p className="mb-0">Date & Time</p>
            </button>
          </div>
          <div className="item">
            <button
              className={menu === "survey" ? "active" : ""}
              onClick={() => setMenu("survey")}
            >
              <p className="mb-0">Survey</p>
            </button>
          </div>
          <div className="item">
            <button
              className={menu === "choices" ? "active" : ""}
              onClick={() => setMenu("choices")}
            >
              <p className="mb-0">Choices</p>
            </button>
          </div>
          <div className="item">
            <button
              className={menu === "embed" ? "active" : ""}
              onClick={() => setMenu("embed")}
            >
              <p className="mb-0">Embed</p>
            </button>
          </div>
          <div className="item">
            <button
              className={menu === "payments" ? "active" : ""}
              onClick={() => setMenu("payments")}
            >
              <p className="mb-0">Payments</p>
            </button>
          </div>
          <div className="item">
            <button
              className={menu === "spam" ? "active" : ""}
              onClick={() => setMenu("spam")}
            >
              <p className="mb-0">Spam Protection</p>
            </button>
          </div>
          <div className="item">
            <button
              className={menu === "other" ? "active" : ""}
              onClick={() => setMenu("other")}
            >
              <p className="mb-0">Others</p>
            </button>
          </div>
        </Slider>
        <div className="input-section">
          <input type="text" placeholder="search here..." />
          <CiSearch className="search-icon" />
        </div>

        {menu === "basic" ? (
          <div className="input-list">
            <li>
              <DraggableItem id="form-header">
                <button className="input_">
                  <button className="input-icon">
                    <FaHeading />
                  </button>
                  Form Header
                </button>
              </DraggableItem>
            </li>
            <li>
              <DraggableItem id="text">
                <button className="input_">
                  <button className="input-icon">
                    <TfiText />
                  </button>
                  Text
                </button>
              </DraggableItem>
            </li>
            <li>
              <DraggableItem id="short-text">
                <button className="input_">
                  <button className="input-icon">
                    <FiFileText />
                  </button>
                  Short text
                </button>
              </DraggableItem>
            </li>

            <li>
              <DraggableItem id="long-text">
                <button className="input_">
                  <button className="input-icon">
                    <FiFileText />
                  </button>
                  Long text
                </button>
              </DraggableItem>
            </li>
            <li>
              <DraggableItem id="number">
                <button className="input_">
                  <button className="input-icon">
                    <TbNumbers />
                  </button>
                  Number
                </button>
              </DraggableItem>
            </li>
          </div>
        ) : (
          <div className="input-list">
            <li>
              <DraggableItem id="name">
                <button className="input_">
                  <button className="input-icon">
                    <AiOutlineUser />
                  </button>
                  Name
                </button>
              </DraggableItem>
            </li>
            <li>
              <DraggableItem id="email">
                <button className="input_">
                  <button className="input-icon">
                    <TfiEmail />
                  </button>
                  Email
                </button>
              </DraggableItem>
            </li>
            <li>
              <DraggableItem id="phone">
                <button className="input_">
                  <button className="input-icon">
                    <LuPhone />
                  </button>
                  Phone
                </button>
              </DraggableItem>
            </li>

            <li>
              <DraggableItem id="link">
                <button className="input_">
                  <button className="input-icon">
                    <FaLink />
                  </button>
                  Link
                </button>
              </DraggableItem>
            </li>
            <li>
              <DraggableItem id="address">
                <button className="input_">
                  <button className="input-icon">
                    <PiMapPinBold />
                  </button>
                  Address
                </button>
              </DraggableItem>
            </li>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
