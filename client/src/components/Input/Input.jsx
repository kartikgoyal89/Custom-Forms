import React, { useState, useEffect } from "react";
import "./input.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useItems } from "../../context/itemContext.jsx";

const Input = ({
  id,
  onBlur,
  onFocus,
  style,
  isSelected,
  inputText,
  onClick,
}) => {
  const { items } = useItems();
  const handleInputClick = () => {
    onClick(id);
  };
  const defaultInputStyle = {
    fontSize: "20px",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000",
    textAlign: "left",
    inputText: "Add a short Paragraph",
  };

  useEffect(() => {
    items.forEach((item) => {
      if (item?.type === "text" && !item.style) {
        item.style = { ...defaultInputStyle };
      }
    });
  }, []);

  return (
    <div
      className={`hover-outline input-form-container ${
        isSelected ? "active" : ""
      }`}
      onClick={handleInputClick}
    >
      <input
        type="text"
        style={{
          fontSize: `${style?.fontSize !== undefined ? style?.fontSize : 18}px`,
          fontWeight: `${style?.bold ? "600" : "400"}`,
          fontStyle: `${style?.italic ? "italic" : "normal"}`,
          color: `${style?.color}`,
          cursor: "pointer",
        }}
        value={
          style?.inputText === undefined
            ? "Add a short Paragraph"
            : style?.inputText
        }
      />
    </div>
  );
};

export default Input;
