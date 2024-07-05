import React, { useEffect } from "react";
import { useItems } from "../../context/itemContext.jsx";
import "./longText.css";

const LongText = ({
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
  useEffect(() => {
    items.forEach((item) => {
      if (item?.type === "short-text" && !item.style) {
        item.style = { ...defaultShortTextStyle };
      }
    });
  }, []);
  const elementStyle = { ...defaultShortTextStyle, ...style };

  return (
    <div
      className={`hover-outline short-text-container ${
        isSelected ? "active" : ""
      }`}
      onClick={handleShortTextClick}
      style={{ cursor: "pointer" }}
    >
      <h6 className={`mb-3 ${style?.required ? "required" : ""}`}>
        {style?.fieldLabel !== undefined ? style?.fieldLabel : "Long Text"}
        {elementStyle.required && <span style={{ color: "red" }}> *</span>}
      </h6>
      <textarea
        type="text"
        rows="6"
        className="w-100 input-textarea"
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

export default LongText;
