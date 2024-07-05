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
    <div className="hover-outline" onClick={handleShortTextClick}>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default Phone;
