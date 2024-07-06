import React, { useEffect } from "react";
import { useItems } from "../../context/itemContext.jsx";
import "./name.css";

const Name = ({
  id,
  onBlur,
  onFocus,
  style,
  isSelected,
  text,
  firstNameInput,
  lastNameInput,
  firstPlaceholder,
  lastPlaceholder,
  onClick,
  selectedFields,
}) => {
  const { items } = useItems();
  const handleShortTextClick = () => {
    onClick(id);
  };
  const defaultNameStyle = {
    fontSize: "20px",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000",
    textAlign: "left",
    text: "Name",
    fieldLabel: "Short Text",
    placeholderText: "Type your answer here...",
    toggle: false,
  };
  const elementStyle = { ...defaultNameStyle, ...style };

  return (
    <div
      className={`hover-outline short-text-container name-input-container ${
        isSelected ? "active" : ""
      }`}
      onClick={handleShortTextClick}
      style={{ cursor: "pointer" }}
    >
      <h6 className={`mb-3 ${style?.required ? "required" : ""}`}>
        {style?.fieldLabel !== undefined ? style?.fieldLabel : "Name"}
        {elementStyle.required && <span style={{ color: "red" }}> *</span>}
      </h6>
      <div className="name-container">
        <div className="first-name">
          <p>
            {style?.firstNameInput !== undefined
              ? style?.firstNameInput
              : "First Name"}
            {elementStyle.required && <span style={{ color: "red" }}> *</span>}
          </p>
          <input
            type="text"
            readOnly
            placeholder={
              style?.firstPlaceholder !== undefined
                ? style?.firstPlaceholder
                : "First Name"
            }
          />
        </div>
        <div className="last-name">
          <p>
            {style?.lastNameInput !== undefined
              ? style?.lastNameInput
              : "Last Name"}
            {elementStyle.required && <span style={{ color: "red" }}> *</span>}
          </p>
          <input
            type="text"
            readOnly
            placeholder={
              style?.lastPlaceholder !== undefined
                ? style?.lastPlaceholder
                : "Last Name"
            }
          />
        </div>
      </div>
    </div>
  );
  return <div>Name</div>;
};

export default Name;
