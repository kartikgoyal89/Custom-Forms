import React, { useState, useEffect } from "react";
import { useItems } from "../../context/itemContext.jsx";
import nameProperties from "../../config/nameProperties.json";
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
  VisibleOptions,
}) => {
  const [visibleElements, setVisibleElements] = useState({
    firstName: true,
    middleName: false,
    lastName: true,
    // Add more fields as needed
  });
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

  useEffect(() => {
    // Update visibleElements state based on VisibleOptions
    const updatedVisibleElements = {
      ...visibleElements,
    };
    VisibleOptions.forEach((opt) => {
      if (updatedVisibleElements.hasOwnProperty(opt.value)) {
        updatedVisibleElements[opt.value] = opt.checked;
      }
    });
    setVisibleElements(updatedVisibleElements);
  }, [VisibleOptions]);

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
        <div
          className={`name ${
            visibleElements.firstName === false ? "hidden" : ""
          }`}
        >
          <p>
            {style?.firstNameInput !== undefined
              ? style?.firstNameInput
              : "First Name"}
            {elementStyle.required && <span style={{ color: "red" }}> *</span>}
          </p>
          <input
            type="text"
            readOnly
            required={style?.required}
            placeholder={
              style?.firstPlaceholder !== undefined
                ? style?.firstPlaceholder
                : "First Name"
            }
          />
        </div>
        <div
          className={`name ${
            visibleElements.middleName === false ? "hidden" : ""
          }`}
        >
          <p>
            {style?.middleNameInput !== undefined
              ? style?.lastNameInput
              : "Middle Name"}
            {elementStyle.required && <span style={{ color: "red" }}> *</span>}
          </p>
          <input
            type="text"
            readOnly
            required={style?.required}
            placeholder={
              style?.middlePlaceholder !== undefined
                ? style?.middlePlaceholder
                : "Middle Name"
            }
          />
        </div>
        <div
          className={`name last-name ${
            visibleElements.lastName === false ? "hidden" : ""
          }`}
        >
          <p>
            {style?.lastNameInput !== undefined
              ? style?.lastNameInput
              : "Last Name"}
            {elementStyle.required && <span style={{ color: "red" }}> *</span>}
          </p>
          <input
            type="text"
            readOnly
            required={style?.required}
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
