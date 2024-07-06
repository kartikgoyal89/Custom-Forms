import React, { useState, useEffect } from "react";
import { useItems } from "../../context/itemContext.jsx";
import "./add.css";

const Address = ({
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
    defaultVal: "Default Value",
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
      className={`hover-outline short-text-container address-container ${
        isSelected ? "active" : ""
      }`}
      onClick={handleShortTextClick}
      style={{ cursor: "pointer" }}
    >
      <h6 className={`mb-3 ${style?.required ? "required" : ""}`}>
        {style?.fieldLabel !== undefined ? style?.fieldLabel : "Address"}
        {elementStyle.required && <span style={{ color: "red" }}> *</span>}
      </h6>

      <div className="address-input-container">
        <div className="street">
          <p className="mb-1">
            {style?.Street1 !== undefined ? style?.Street1 : "Street Address"}
            {elementStyle.required && <span style={{ color: "red" }}> *</span>}
          </p>
          <input
            readOnly
            type="text"
            placeholder={
              style?.pStreet1 !== undefined ? style?.pStreet1 : "Street Address"
            }
          />
        </div>
        <div className="street">
          <p className="mb-1">
            {style?.Street2 !== undefined
              ? style?.Street2
              : "Street Address line 2"}
          </p>
          <input
            readOnly
            type="text"
            placeholder={
              style?.pStreet2 !== undefined
                ? style?.pStreet2
                : "Street Address line 2"
            }
          />
        </div>
        <div className="other">
          <div className="city">
            <p className="mb-1">
              {style?.city !== undefined ? style?.city : "City"}
              {elementStyle.required && (
                <span style={{ color: "red" }}> *</span>
              )}
            </p>
            <input
              readOnly
              type="text"
              placeholder={style?.pcity !== undefined ? style?.pcity : "City"}
            />
          </div>
          <div className="city last">
            <p className="mb-1">
              {style?.province !== undefined
                ? style?.province
                : "State/Province"}
              {elementStyle.required && (
                <span style={{ color: "red" }}> *</span>
              )}
            </p>
            <input
              readOnly
              type="text"
              placeholder={
                style?.pprovince !== undefined
                  ? style?.pprovince
                  : "State/Province"
              }
            />
          </div>
        </div>
        <div className="other">
          <div className="city ">
            <p className="mb-1">
              {style?.postal !== undefined ? style?.postal : "Postal/Zip Code"}
              {elementStyle.required && (
                <span style={{ color: "red" }}> *</span>
              )}
            </p>
            <input
              readOnly
              type="text"
              placeholder={
                style?.ppostal !== undefined
                  ? style?.ppostal
                  : "Postal/Zip Code"
              }
            />
          </div>
          <div className="city last">
            <p className="mb-1">
              {style?.country !== undefined ? style?.country : "Country"}
              {elementStyle.required && (
                <span style={{ color: "red" }}> *</span>
              )}
            </p>
            <input
              readOnly
              type="text"
              placeholder={
                style?.pcountry !== undefined ? style?.pcountry : "Country"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
