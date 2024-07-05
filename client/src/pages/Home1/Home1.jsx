import React, { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import "../Home/home.css";
import { useDroppable } from "@dnd-kit/core";
import { listState } from "../../components/Layout/Layout";
import { useItems } from "../../context/itemContext.jsx";

import Input from "../../components/Input/Input";
import Heading from "../../components/heading/Heading";
import ShortText from "../../components/shortText/ShortText";
import LongText from "../../components/LongText/LongText";
import Number from "../../components/Number/Number";
import Name from "../../components/Name/Name";
import Email from "../../components/Email/Email";
import Phone from "../../components/Phone/Phone";

import ColorPicker from "../../components/ColorPicker/ColorPicker";
import Collapsible from "react-collapsible";
import { AiOutlineDrag } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { PiAlignCenterHorizontalBold } from "react-icons/pi";
import { PiAlignRightBold } from "react-icons/pi";
import { PiAlignLeftBold } from "react-icons/pi";
import { FaHeading } from "react-icons/fa6";
import { TfiText } from "react-icons/tfi";
import { PiTextTBold } from "react-icons/pi";
import { FiFileText } from "react-icons/fi";
import { TbNumbers } from "react-icons/tb";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { IoRadioButtonOnSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import { PiMapPinBold } from "react-icons/pi";

import buttonProperties from "../../config/buttonProperties.json";
import textProperties from "../../config/textProperties.json";
import formHeaderProperties from "../../config/formHeaderProperties.json";
import shortTextProperties from "../../config/shortTextProperties.json";
import longTextProperties from "../../config/longTextProperties.json";
import numberProperties from "../../config/numberProperties.json";
import nameProperties from "../../config/nameProperties.json";
import emailProperties from "../../config/emailProperties.json";
import phoneProperties from "../../config/phoneProperties.json";

import Accordion from "../../components/Accordion/Accordion";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Home1 = () => {
  const { items, setItems } = useItems();
  const [selectedElementId, setSelectedElementId] = useState(null);

  // COLOR STATE
  const [primaryColor, setPrimaryColor] = useState("#01A3FE");
  const [questionColor, setQuestionColor] = useState("#FFFFFF");
  const [answerColor, setAnswerColor] = useState("#FFFFFF");
  const [formColor, setFormColor] = useState("#FFFFFF");
  const [buttonColor, setButtonColor] = useState("");

  // SLIDE STATE
  const [slide, setSlide] = useState("hide");
  // TOGGLE STATE
  const [isToggled, setIsToggled] = useState(false);

  // COLOR STATE
  const [slideColor, setSlideColor] = useState("#000000");

  // DESIGN STATE
  const [activeTab, setActiveTab] = useState("general");

  // SUBMIT BUTTON STATE
  const [submit, setSubmit] = useState("Submit");
  const [btnHeight, setBtnHeight] = useState(42);
  const [btnFontSize, setBtnFontSize] = useState(20);
  const [btnBold, setBtnBold] = useState(false);
  const [btnItalic, setBtnItalic] = useState(false);

  const [submitButtonStyle, setSubmitButtonStyle] = useState({
    backgroundColor: primaryColor,
    fontSize: 20,
    height: 42,
    fontWeight: "400",
    fontStyle: "normal",
    text: "Submit",
  });

  // ==================================================================
  // MAIN STYLING
  const [mainId, setMainId] = useState(null);
  const [mainType, setMainType] = useState("");
  const [mainText, setMainText] = useState("");
  const [mainStyle, setMainStyle] = useState({});
  // ==================================================================

  //BUTTON PROPERTIES
  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color);
  };

  const handleQuestionColorChange = (color) => {
    setQuestionColor(color);
  };

  const handleAnswerColorChange = (color) => {
    setAnswerColor(color);
  };

  const handleFormColorChange = (color) => {
    setFormColor(color);
  };

  // SUBMIT BUTTON FUNCTION
  const handleSubmitButton = (e) => {
    e.preventDefault();
    setSlide("show");
    setMainType("button");
    setMainId(0);
    setMainText(submit ? submit : "Submit");
    ({
      backgroundColor: primaryColor,
      fontSize: `${btnFontSize}px`,
      height: `${btnHeight}px`,
      fontWeight: btnBold ? "600" : "400",
      fontStyle: btnItalic ? "italic" : "normal",
    });
  };

  const setTheProperties = (id) => {
    setMainId(id);
    items.forEach((item) => {
      if (item?.id === id) {
        setMainText(item?.text || "");
        setMainStyle(item?.style || {});
        setMainType(item?.type);
      }
    });
    setSlide("show");
  };

  const handleStyleChange = (id, name, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              style: { ...item.style, [name]: value },
              ...(name === "text" && { text: value }),
            }
          : item
      )
    );
    if (id === 0) {
      setSubmitButtonStyle((prevStyle) => ({
        ...prevStyle,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  const iconComponents = {
    FaHeading: FaHeading,
    FaBold: FaBold,
    FaItalic: FaItalic,
    PiTextTBold: PiTextTBold,
    IoRadioButtonOnSharp: IoRadioButtonOnSharp,
    FiFileText: FiFileText,
    TbNumbers: TbNumbers,
    AiOutlineUser: AiOutlineUser,
    TfiEmail: TfiEmail,
  };

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  const renderProperties = (properties, id) => {
    const element = items.find((item) => item.id === id);

    return Object.keys(properties).map((key) => {
      const property = properties[key];
      const IconComponent = iconComponents[property.headingIcon];
      return (
        <div
          key={key}
          style={
            property?.column === "column"
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }
              : {}
          }
        >
          <div
            className={`${property?.isHeading ? "element-heading" : "element"}`}
          >
            <div className="heading">
              <div className="icon">{IconComponent && <IconComponent />}</div>
              <label
                className={`${property?.isHeading ? "heading-label" : ""}`}
              >
                {property.label}
              </label>
            </div>
            <RxCross2
              className={`${
                property?.isHeading ? "heading-cross" : "display-none"
              }`}
              onClick={() => setSlide("hide")}
            />
          </div>
          <hr className={`${property?.isHeading ? "hr" : "display-none"}`} />
          {property.type === "number" ? (
            <input
              type="number"
              max={property?.max ? property?.max : 10000}
              min={property?.min ? property?.min : 0}
              defaultValue={
                parseInt(element?.style?.[key]) === undefined
                  ? parseInt(element?.style?.[key])
                  : property?.defaultValue
              }
              onChange={(e) => handleStyleChange(id, key, e.target.value)}
            />
          ) : property.type === "button" ? (
            <button
              className={`btn ${
                element?.style?.[key] === true ? "active-btn" : ""
              }`}
              onClick={(prevState) => {
                handleStyleChange(id, key, !element?.style?.[key]);
              }}
            >
              {property.value}
            </button>
          ) : property.type === "color" ? (
            <div className="color-input-div">
              <input
                className="color-input"
                type="color"
                value={slideColor}
                onChange={(e) => {
                  handleStyleChange(id, key, e.target.value);
                  setSlideColor(e.target.value);
                }}
              />
              <p className="mb-0">{slideColor}</p>
            </div>
          ) : property?.type === "none" ? (
            <></>
          ) : property.type === "toggle" ? (
            <>
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleStyleChange(id, key, !element?.style?.[key]);
                  }}
                />
                <span class="slider round"></span>
              </label>
            </>
          ) : (
            <input
              className="input-text"
              type="text"
              defaultValue={property.defaultValue}
              value={element?.style?.[key]}
              onChange={(e) => handleStyleChange(id, key, e.target.value)}
            />
          )}
        </div>
      );
    });
  };

  return (
    <listState>
      <Layout className="home-layout">
        <div className="home-container">
          <form action="" className="form-container">
            {items?.length === 0 ? (
              <>
                <div className="nodata">
                  <div className="text">
                    <AiOutlineDrag /> Click or Drag Elements to add questions,
                    text to your form.
                  </div>
                </div>
              </>
            ) : (
              <>
                {items?.map((item, key) =>
                  item?.type === "form-header" ? (
                    <Heading
                      id={item.id}
                      key={item.id}
                      onClick={() => setTheProperties(item.id)}
                      style={item.style || {}}
                      isSelected={mainId === item.id}
                      text={item.text}
                    />
                  ) : item?.type === "text" ? (
                    <Input
                      id={item.id}
                      key={item.id}
                      onClick={() => setTheProperties(item.id)}
                      style={item.style || {}}
                      isSelected={mainId === item.id}
                      text={item.text}
                    />
                  ) : item?.type === "long-text" ? (
                    <LongText
                      id={item.id}
                      key={item.id}
                      onClick={() => setTheProperties(item.id)}
                      style={item.style || {}}
                      isSelected={mainId === item.id}
                      text={item.text}
                    />
                  ) : item?.type === "short-text" ? (
                    <ShortText
                      id={item.id}
                      key={item.id}
                      onClick={() => setTheProperties(item.id)}
                      style={item.style || {}}
                      isSelected={mainId === item.id}
                      text={item.text}
                      placeholderText={item.text}
                    />
                  ) : item?.type === "number" ? (
                    <Number
                      id={item.id}
                      key={item.id}
                      onClick={() => setTheProperties(item.id)}
                      style={item.style || {}}
                      isSelected={mainId === item.id}
                      text={item.text}
                      placeholderText={item.text}
                    />
                  ) : item?.type === "email" ? (
                    <Email
                      id={item.id}
                      key={item.id}
                      onClick={() => setTheProperties(item.id)}
                      style={item.style || {}}
                      isSelected={mainId === item.id}
                      text={item.text}
                      placeholderText={item.text}
                    />
                  ) : item?.type === "name" ? (
                    <Name
                      id={item.id}
                      key={item.id}
                      onClick={() => setTheProperties(item.id)}
                      style={item.style || {}}
                      isSelected={mainId === item.id}
                      text={item.text}
                      firstNameInput={item.text}
                      lastNameInput={item.text}
                      firstPlaceholder={item.text}
                      lastPlaceholder={item.text}
                    />
                  ) : (
                    <Phone
                      id={item.id}
                      key={item.id}
                      onClick={() => setTheProperties(item.id)}
                      style={item.style || {}}
                      isSelected={mainId === item.id}
                      text={item.text}
                      placeholderText={item.text}
                    />
                  )
                )}
                <div className="submit-div hover-outline">
                  <button
                    className="submit"
                    // style={{
                    //   backgroundColor: primaryColor,
                    //   fontSize: `${btnFontSize}px`,
                    //   height: `${btnHeight}px`,
                    //   fontWeight: btnBold ? "600" : "400",
                    //   fontStyle: btnItalic ? "italic" : "normal",
                    // }}
                    style={submitButtonStyle}
                    onClick={(e) => {
                      handleSubmitButton(e);
                    }}
                  >
                    {submit ? submit : "SUBMIT"}
                  </button>
                </div>
              </>
            )}
          </form>
          <div className="side-settings" style={{ width: "max-content" }}>
            <h6 className="mb-0">Design</h6>
            <hr className="p-0 m-0 w-100 mt-2 mb-2" />
            <h6>General</h6>
            <div className="color-pallette">
              <div className="color-box mt-2 mb-2">
                <p className="color-input m-0">Primary Color</p>
                <ColorPicker onChange={handlePrimaryColorChange} />
              </div>
              <div className="color-box mt-2 mb-2 ms-3">
                <p className="color-input m-0 text-nowrap">Question Color</p>
                <ColorPicker onChange={handleQuestionColorChange} />
              </div>
              <div className="color-box mb-2" style={{ marginTop: "30px" }}>
                <p className="color-input m-0 text-nowrap">Answer Color</p>
                <ColorPicker onChange={handleAnswerColorChange} />
              </div>
              <div
                className="color-box ms-3 mb-2"
                style={{ marginTop: "30px" }}
              >
                <p className="color-input m-0 text-nowrap">Form Color</p>
                <ColorPicker onChange={handleFormColorChange} />
              </div>
            </div>

            <Accordion />

            <div className={`slide-settings ${slide}`}>
              {mainType === "form-header" &&
                renderProperties(formHeaderProperties, mainId)}
              {mainType === "text" && renderProperties(textProperties, mainId)}
              {mainType === "button" && renderProperties(buttonProperties)}
              {mainType === "short-text" &&
                renderProperties(shortTextProperties, mainId)}
              {mainType === "long-text" &&
                renderProperties(longTextProperties, mainId)}
              {mainType === "number" &&
                renderProperties(numberProperties, mainId)}
              {mainType === "name" && renderProperties(nameProperties, mainId)}
              {mainType === "email" &&
                renderProperties(emailProperties, mainId)}
              {mainType === "phone" &&
                renderProperties(phoneProperties, mainId)}
            </div>
          </div>
        </div>
      </Layout>
    </listState>
  );
};

export default Home1;
