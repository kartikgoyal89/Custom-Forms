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
  VisibleOptions,
}) => {
  const { items } = useItems();

  const [visibleElements, setVisibleElements] = useState({
    street1: true,
    street2: true,
    city: true,
    state: true,
    postal: true,
    country: true,
  });
  const handleShortTextClick = () => {
    onClick(id);
  };
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
        <div
          className={`street ${
            visibleElements.street1 === false ? "hidden" : ""
          }`}
        >
          <p className="mb-1">
            {style?.Street1 !== undefined ? style?.Street1 : "Street Address"}
            {elementStyle.required && <span style={{ color: "red" }}> *</span>}
          </p>
          <input
            readOnly
            type="text"
            required={style?.required}
            placeholder={
              style?.pStreet1 !== undefined ? style?.pStreet1 : "Street Address"
            }
          />
        </div>
        <div
          className={`street ${
            visibleElements.street2 === false ? "hidden" : ""
          }`}
        >
          <p className="mb-1">
            {style?.Street2 !== undefined
              ? style?.Street2
              : "Street Address line 2"}
          </p>
          <input
            readOnly
            type="text"
            required={style?.required}
            placeholder={
              style?.pStreet2 !== undefined
                ? style?.pStreet2
                : "Street Address line 2"
            }
          />
        </div>
        <div className="other">
          <div
            className={`city ${visibleElements.city === false ? "hidden" : ""}`}
          >
            <p className="mb-1">
              {style?.city !== undefined ? style?.city : "City"}
              {elementStyle.required && (
                <span style={{ color: "red" }}> *</span>
              )}
            </p>
            <input
              required={style?.required}
              readOnly
              type="text"
              placeholder={style?.pcity !== undefined ? style?.pcity : "City"}
            />
          </div>
          <div
            className={`city-last ${
              visibleElements.state === false ? "hidden" : ""
            }`}
          >
            <p className="mb-1">
              {style?.province !== undefined
                ? style?.province
                : "State/Province"}
              {elementStyle.required && (
                <span style={{ color: "red" }}> *</span>
              )}
            </p>
            <input
              required={style?.required}
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
          <div
            className={`city ${
              visibleElements.postal === false ? "hidden" : ""
            }`}
          >
            <p className="mb-1">
              {style?.postal !== undefined ? style?.postal : "Postal/Zip Code"}
              {elementStyle.required && (
                <span style={{ color: "red" }}> *</span>
              )}
            </p>
            <input
              readOnly
              type="text"
              required={style?.required}
              placeholder={
                style?.ppostal !== undefined
                  ? style?.ppostal
                  : "Postal/Zip Code"
              }
            />
          </div>
          <div
            className={`city-last ${
              visibleElements.country === false ? "hidden" : ""
            }`}
          >
            <p className="mb-1">
              {style?.country !== undefined ? style?.country : "Country"}
              {elementStyle.required && (
                <span style={{ color: "red" }}> *</span>
              )}
            </p>
            <input
              readOnly
              type="text"
              required={style?.required}
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
