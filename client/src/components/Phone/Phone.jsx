import React, { useState, useEffect } from "react";
import { useItems } from "../../context/itemContext.jsx";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./phone.css";

const Phone = ({
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
  const [value, setValue] = useState();

  const defaultShortTextStyle = {
    fontSize: "20px",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000",
    textAlign: "left",
    text: "Add a short Paragraph",
    fieldLabel: "Short Text",
    placeholderText: "example@example.com",
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
  const handleShortTextClick = () => {
    onClick(id);
  };
  return (
    <div
      className="hover-outline phone-container"
      onClick={handleShortTextClick}
    >
      <h6 className={`mb-3 ${style?.required ? "required" : ""}`}>
        {style?.fieldLabel !== undefined ? style?.fieldLabel : "Phone"}
        {elementStyle.required && <span style={{ color: "red" }}> *</span>}
      </h6>
      <PhoneInput required={style?.required} onChange={setValue} />
    </div>
  );
};

export default Phone;
