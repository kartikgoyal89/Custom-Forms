import React, { useState, useEffect } from "react";
import { useItems } from "../../context/itemContext.jsx";
import "./shortText.css";

const ShortText = ({
  id,
  onBlur,
  onFocus,
  style,
  isSelected,
  text,
  placeholderText,
  onClick,
}) => {
  const { items } = useItems();
  const handleShortTextClick = () => {
    onClick(id);
  };

  const defaultShortTextStyle = {
    fontSize: "20px",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000",
    textAlign: "left",
    text: "Add a short Paragraph",
    fieldLabel: "Short Text",
    placeholderText: "Type your answer here...",
    toggle: false,
  };

  const elementStyle = { ...defaultShortTextStyle, ...style };

  useEffect(() => {
    items.forEach((item) => {
      if (item?.type === "short-text" && !item.style) {
        item.style = { ...defaultShortTextStyle };
      }
    });
  }, []);

  return (
    <div
      className={`hover-outline short-text-container ${
        isSelected ? "active" : ""
      }`}
      onClick={handleShortTextClick}
      style={{ cursor: "pointer" }}
    >
      <h6 className={`mb-3 ${style?.required ? "required" : ""}`}>
        {style?.fieldLabel !== undefined ? style?.fieldLabel : "Short Text"}
        {elementStyle.required && <span style={{ color: "red" }}> *</span>}
      </h6>
      <input
        type="text"
        className="w-100"
        placeholder={
          style?.placeholderText !== undefined
            ? style?.placeholderText
            : "Type your answer here..."
        }
        readOnly
        required={style?.required}
      />
    </div>
  );
};

export default ShortText;
