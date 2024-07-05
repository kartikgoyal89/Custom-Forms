import React, { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import "./home.css";
import { useDroppable } from "@dnd-kit/core";
import { listState } from "../../components/Layout/Layout";
import { useItems } from "../../context/itemContext.jsx";
import Input from "../../components/Input/Input";
import Heading from "../../components/heading/Heading";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import Collapsible from "react-collapsible";
import { AiOutlineDrag } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { PiAlignCenterHorizontalBold } from "react-icons/pi";
import { PiAlignRightBold } from "react-icons/pi";
import { PiAlignLeftBold } from "react-icons/pi";
import { FaHeading } from "react-icons/fa6";
import { TfiText } from "react-icons/tfi";
import { FiFileText } from "react-icons/fi";
import { TbNumbers } from "react-icons/tb";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { IoRadioButtonOnSharp } from "react-icons/io5";
import buttonProperties from "../../config/buttonProperties.json";
import textProperties from "../../config/textProperties.json";
import formHeaderProperties from "../../config/formHeaderProperties.json";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Home = () => {
  const { items, setItems } = useItems();
  const [selectedElementId, setSelectedElementId] = useState(null);

  // Type State
  const [type, setType] = useState(null);

  // COLOR STATE
  const [primaryColor, setPrimaryColor] = useState("#01A3FE");
  const [questionColor, setQuestionColor] = useState("#FFFFFF");
  const [answerColor, setAnswerColor] = useState("#FFFFFF");
  const [formColor, setFormColor] = useState("#FFFFFF");
  const [buttonColor, setButtonColor] = useState("");

  //  FORM HEADER STATE
  const [value, setValue] = useState("");
  const [headings, setHeadings] = useState({});
  const [activeHeading, setActiveHeading] = useState({});
  const [headingText, setHeadingText] = useState("Form Header");
  const [selectedHeadingId, setSelectedHeadingId] = useState({ id: null });

  // INPUT STATE
  const [inputValue, setInputValue] = useState("Add a short Paragraph");
  const [inputs, setInputs] = useState({});
  const [activeInput, setActiveInput] = useState({});
  const [inputText, setInputText] = useState("add a short paragraph");
  const [selectedInputId, setSelectedInputId] = useState(null);

  // SLIDE STATE
  const [slide, setSlide] = useState("hide");

  // QUILL STATE
  const [quillState, setQuillState] = useState("");

  // SUBMIT BUTTON STATE
  const [submit, setSubmit] = useState("Submit");
  const [btnHeight, setBtnHeight] = useState(42);
  const [btnFontSize, setBtnFontSize] = useState(20);
  const [btnBold, setBtnBold] = useState(false);
  const [btnItalic, setBtnItalic] = useState(false);

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

  const [state, setState] = useState(items);

  // HEADER PROPERTIES
  const handleDeleteHeading = (id) => {
    const updatedItems = stateItems.filter((item) => item.id !== id);
    setStateItems(updatedItems);
  };

  const setTheProperties = (id) => {
    setMainId(id);
    items.forEach((item) => {
      if (item?.id === id) {
        setMainText(item?.text);
        setMainStyle(item?.style);
        setMainType(item?.type);
      }
    });
    setSlide("show");
  };

  useEffect(() => {
    console.log(mainId, mainText, mainStyle, mainType);
  }, [mainId, setMainId, mainType]);

  // const handleStyleChange = (e) => {
  //   const { name, value } = e.target;
  //   setHeadings((prevHeadings) => {
  //     const currentStyle = prevHeadings[selectedHeadingId]?.[name];
  //     const newStyleValue = currentStyle === value ? "" : value;

  //     return {
  //       ...prevHeadings,
  //       [selectedHeadingId]: {
  //         ...prevHeadings[selectedHeadingId],
  //         [name]: newStyleValue,
  //       },
  //     };
  //   });
  // };

  // const handleStyleChange = (e) => {
  //   const { name, value } = e.target;
  //   setHeadings((prevHeadings) => {
  //     const currentStyle = prevHeadings[selectedHeadingId]?.[name];
  //     const newStyleValue = currentStyle === value ? "" : value;

  //     return {
  //       ...prevHeadings,
  //       [selectedHeadingId]: {
  //         ...prevHeadings[selectedHeadingId],
  //         [name]: newStyleValue,
  //       },
  //     };
  //   });
  // };
  // =========================================================================
  // const handleStyleChange = (id, name, value) => {
  //   setItems((prevItems) => {
  //     return prevItems.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           style: {
  //             ...item.style,
  //             [name]: value,
  //           },
  //         };
  //       }
  //       return item;
  //     });
  //   });
  // };

  const handleStyleChange = (id, name, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, style: { ...item.style, [name]: value } }
          : item
      )
    );
  };

  const handleElementClick = (id, type) => {
    setSelectedElementId(id);
    setSlide("show");
    // Handle different types if needed
  };

  {
    /*const handleInputStyleChange = (e) => {
    const { name, value } = e.target;
    setHeadings((prevHeadings) => {
      const currentStyle = prevHeadings[selectedHeadingId]?.[name];
      const newStyleValue = currentStyle === value ? "" : value;

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === selectedInputId
            ? { ...item, style: { ...item.style, [name]: newStyleValue } }
            : item
        )
      );
      return {
        ...prevHeadings,
        [selectedHeadingId]: {
          ...prevHeadings[selectedHeadingId],
          [name]: newStyleValue,
        },
      };
    });
  };
  */
  }

  // const renderProperties = (properties, id) => {
  //   return Object.keys(properties).map((key) => {
  //     const property = properties[key];
  //     return (
  //       <div key={key}>
  //         <label>{property.label}</label>
  //         {property.type === "number" ? (
  //           <input
  //             type="number"
  //             className="w-100"
  //             defaultValue={property.defaultValue}
  //             onChange={(e) => handleStyleChange(id, key, e.target.value)}
  //           />
  //         ) : (
  //           <input
  //             type="text"
  //             className="w-100"
  //             defaultValue={property.defaultValue}
  //             onChange={(e) => handleStyleChange(id, key, e.target.value)}
  //           />
  //         )}
  //       </div>
  //     );
  //   });
  // };

  const renderProperties = (properties, id) => {
    return Object.keys(properties).map((key) => {
      const property = properties[key];
      return (
        <div key={key}>
          <label>{property.label}</label>
          {property.type === "number" ? (
            <input
              type="number"
              className="w-100"
              defaultValue={property.defaultValue}
              onChange={(e) => handleStyleChange(id, key, e.target.value)}
            />
          ) : property.type === "button" ? (
            <button
              className="btn btn-success"
              onChange={(e) => handleStyleChange(id, key, e.target.value)}
            >
              {property.value}
            </button>
          ) : (
            <input
              type="text"
              className="w-100"
              defaultValue={property.defaultValue}
              onChange={(e) => handleStyleChange(id, key, e.target.value)}
            />
          )}
        </div>
      );
    });
  };
  // =====================================================================================

  {
    /*const handleHeadingClick = (id) => {
    setSelectedHeadingId(id);
    setActiveHeading({ id: id });
    findProperties(id);
    setSlide("show");
    setType("form-header");
  };

  const handleHeadingTextChange = (e) => {
    const { value } = e.target;
    setHeadings((prevHeadings) => ({
      ...prevHeadings,
      [selectedHeadingId]: {
        ...prevHeadings[selectedHeadingId],
        headingText: value,
      },
    }));
  };

  const findProperties = (id) => {
    items?.map((item, key) => {
      if (item?.id === activeHeading?.id) {
        setActiveHeading({ item });
      } else if (item?.id === activeInput?.id) {
        setActiveHeading({ item });
      }
    });
  };

  const findInputProperties = (id) => {
    items?.map((item) => {
      if (item?.id === activeInput?.id) {
        setActiveInput({ item });
      } else if (item?.id === activeInput?.id) {
        setActiveInput({ item });
      }
    });
  };

  const handleInputClick = (id) => {
    setSelectedInputId(id);
    setActiveInput({ id: id });
    findInputProperties(id);
    setSlide("show");
    setType("short-text");
  };

  const changeInputText = (value) => {
    setInputValue(value);
    setQuillState(value);
  };

  */
  }
  const handleClickButton = (e) => {
    e.preventDefault();
    setSlide("show");
    setType("button");
  };

  const handleSubmitBtn = (e) => {
    setSubmit(e.target.value);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  // const renderProperties = (properties, id) => {
  //   return Object.keys(properties).map((key) => {
  //     const property = properties[key];
  //     return (
  //       <div key={key}>
  //         <label>{property.label}</label>
  //         {property.type === "number" ? (
  //           <input
  //             type="number"
  //             className="w-100"
  //             defaultValue={property.defaultValue}
  //             onChange={(e) => {
  //               if (key === "fontSize") {
  //                 setType === "form-header"
  //                   ? setHeadings((prev) => ({
  //                       ...prev,
  //                       [id]: {
  //                         ...prev[id],
  //                         fontSize: e.target.value,
  //                       },
  //                     }))
  //                   : setInputs((prev) => ({
  //                       ...prev,
  //                       [id]: {
  //                         ...prev[id],
  //                         fontSize: e.target.value,
  //                       },
  //                     }));
  //               }
  //             }}
  //           />
  //         ) : key === "bold" ? (
  //           <div
  //             className="prop"
  //             onClick={() => {
  //               setType === "form-header"
  //                 ? setHeadings((prev) => ({
  //                     ...prev,
  //                     [id]: {
  //                       ...prev[id],
  //                       bold: !prev[id]?.bold,
  //                     },
  //                   }))
  //                 : setInputs((prev) => ({
  //                     ...prev,
  //                     [id]: {
  //                       ...prev[id],
  //                       bold: !prev[id]?.bold,
  //                     },
  //                   }));
  //             }}
  //           >
  //             <FaBold />
  //           </div>
  //         ) : key === "italic" ? (
  //           <div
  //             className="prop"
  //             onClick={() => {
  //               setType === "form-header"
  //                 ? setHeadings((prev) => ({
  //                     ...prev,
  //                     [id]: {
  //                       ...prev[id],
  //                       italic: !prev[id]?.italic,
  //                     },
  //                   }))
  //                 : setInputs((prev) => ({
  //                     ...prev,
  //                     [id]: {
  //                       ...prev[id],
  //                       italic: !prev[id]?.italic,
  //                     },
  //                   }));
  //             }}
  //           >
  //             <FaItalic />
  //           </div>
  //         ) : (
  //           <input
  //             type="text"
  //             className="w-100"
  //             defaultValue={property.defaultValue}
  //             onChange={(e) => {
  //               setType === "form-header"
  //                 ? setHeadings((prev) => ({
  //                     ...prev,
  //                     [id]: {
  //                       ...prev[id],
  //                       headingText: e.target.value,
  //                     },
  //                   }))
  //                 : setInputs((prev) => ({
  //                     ...prev,
  //                     [id]: {
  //                       ...prev[id],
  //                       inputText: e.target.value,
  //                     },
  //                   }));
  //             }}
  //           />
  //         )}
  //       </div>
  //     );
  //   });
  // };

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
                    <>
                      {/* <Heading
                        key={item?.id}
                        id={item?.id}
                        onBlur={() => setValue(item?.id)}
                        onFocus={() => setValue(item?.id)}
                        style={headings[item?.id] || {}}
                        onClick={() => handleHeadingClick(item?.id)}
                        headingText={headings[item?.id]?.headingText}
                        isSelected={selectedHeadingId === item?.id}
                      /> */}

                      <Heading
                        id={item.id}
                        key={item.id}
                        // onClick={() => handleElementClick(item.id, item.type)}
                        onClick={() => setTheProperties(item.id)}
                        style={item.style || {}}
                        isSelected={selectedElementId === item.id}
                      />
                    </>
                  ) : (
                    <>
                      {/* <Input
                      key={item?.id}
                      id={item?.id}
                      onBlur={() => setValue(item?.id)}
                      onFocus={() => setValue(item?.id)}
                      style={inputs[item?.id] || {}}
                      onClick={() => handleInputClick(item?.id)}
                      inputText={inputValue}
                      isSelected={selectedInputId === item?.id}
                    /> */}
                      <Input
                        id={item.id}
                        key={item.id}
                        // onClick={() => handleElementClick(item.id, item.type)}
                        onClick={() => setTheProperties(item.id)}
                        style={item.style || {}}
                        isSelected={selectedElementId === item.id}
                      />
                    </>
                  )
                )}
                <div className="submit-div">
                  <button
                    className="submit"
                    style={{
                      backgroundColor: primaryColor,
                      fontSize: `${btnFontSize}px`,
                      height: `${btnHeight}px`,
                      fontWeight: btnBold ? "600" : "400",
                      fontStyle: btnItalic ? "italic" : "normal",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setSlide("show");
                      setMainType("button");
                      setMainId(0);
                      setMainText(submit ? submit : "Submit");
                      setMainStyle({
                        backgroundColor: primaryColor,
                        fontSize: `${btnFontSize}px`,
                        height: `${btnHeight}px`,
                        fontWeight: btnBold ? "600" : "400",
                        fontStyle: btnItalic ? "italic" : "normal",
                      });
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

            <div className="settings-accordion mt-5">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Font Style
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>Font</p>
                      <select name="" className="dropdown" id="">
                        <option value="sans-serif">sans-serif</option>
                        <option value="rubik">Rubik</option>
                      </select>
                      <div className="font-prop d-flex justify-between gap-10">
                        <div className="prop">
                          <p className="mb-0 text-nowrap">Question Font Size</p>
                          <input type="number" defaultValue="16" />
                        </div>
                        <div className="prop">
                          <p className="mb-0 text-nowrap">Question Spacing</p>
                          <input type="number" defaultValue="12" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Color
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>Placeholder Text</p>
                      <ColorPicker />
                      <p>Button Text</p>
                      <ColorPicker />
                      <p>Border </p>
                      <ColorPicker />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Margin
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="margin-prop">
                        <div className="prop">
                          <p>Field Top</p>
                          <input type="number" defaultValue="0" />
                        </div>
                        <div className="prop">
                          <p>Field Bottom</p>
                          <input type="number" defaultValue="0" />
                        </div>
                        <div className="prop">
                          <p>Label Bottom</p>
                          <input type="number" defaultValue="0" />
                        </div>
                        <div className="prop">
                          <p>Description Bottom</p>
                          <input type="number" defaultValue="0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Padding
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="margin-prop">
                        <div className="prop">
                          <p>Field Top</p>
                          <input type="number" defaultValue="0" />
                        </div>
                        <div className="prop">
                          <p>Field Bottom</p>
                          <input type="number" defaultValue="0" />
                        </div>
                        <div className="prop">
                          <p>Label Bottom</p>
                          <input type="number" defaultValue="0" />
                        </div>
                        <div className="prop">
                          <p>Description Bottom</p>
                          <input type="number" defaultValue="0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`slide-settings ${slide}`}>
              {/*{type === "form-header" ? (
                <div>
                  <div className="heading d-flex align-items-center justify-content-between px-3 pt-3">
                    <h5 className="mb-0">
                      <span className="input-icon">
                        <FaHeading />
                      </span>
                      Form Header
                    </h5>
                    <RxCross2
                      onClick={() => {
                        setSlide("hide");
                      }}
                      className="fs-4 me-1 cursor-pointer"
                    />
                  </div>
                  <hr />
                  <p className="px-2 mb-2">Heading Text</p>
                  <textarea
                    className="px-2 mx-3 textarea"
                    defaultValue={headingText}
                    rows="5"
                    onChange={handleHeadingTextChange}
                  ></textarea>
                  <p className="small-text">
                    Type your heading. It will display on the form.
                  </p>
                  <div className="prop d-flex align-items-center justify-content-between px-2">
                    <p className="text-nowrap mb-0">Heading Font Size</p>

                    <input
                      type="number"
                      name="fontSize"
                      value={headings[selectedHeadingId]?.fontSize || "36"}
                      onChange={handleStyleChange}
                    />
                  </div>
                  <div className="prop d-flex align-items-center justify-content-between px-2 pt-3">
                    <p className="mb-0">Heading Font Style</p>
                    <div className="btn_">
                      <button
                        name="bold"
                        value="bold"
                        onClick={handleStyleChange}
                        className={
                          headings[selectedHeadingId]?.bold === "bold"
                            ? "active-btn"
                            : ""
                        }
                      >
                        <FaBold />
                      </button>
                      <button
                        name="italic"
                        value="italic"
                        onClick={handleStyleChange}
                        className={
                          headings[selectedHeadingId]?.italic === "italic"
                            ? "active-btn"
                            : ""
                        }
                      >
                        <FaItalic />
                      </button>
                    </div>
                  </div>
                  <hr />
                  <p className="px-2 mb-0">Alignment</p>
                  <p className="small-text align-text">
                    Choose how the text should align.
                  </p>
                  <div className="align-btn px-2">
                    <button
                      name="position"
                      value="left"
                      className={
                        headings[selectedHeadingId]?.position === "left"
                          ? "active"
                          : ""
                      }
                      onClick={handleStyleChange}
                    >
                      <PiAlignLeftBold /> Left
                    </button>
                    <button
                      name="position"
                      value="center"
                      className={
                        headings[selectedHeadingId]?.position === "center"
                          ? "active"
                          : ""
                      }
                      onClick={handleStyleChange}
                    >
                      <PiAlignCenterHorizontalBold /> Center
                    </button>
                    <button
                      name="position"
                      value="right"
                      className={
                        headings[selectedHeadingId]?.position === "right"
                          ? "active"
                          : ""
                      }
                      onClick={handleStyleChange}
                    >
                      <PiAlignRightBold /> Right
                    </button>
                  </div>
                </div>
              ) : type === "short-text" ? (
                <div className="input-slide">
                  <div className="input w-100 d-flex align-items-center justify-content-between pt-3">
                    <h5 className="mb-0">
                      <span className="input-icon">
                        <TfiText />
                      </span>
                      Text
                    </h5>
                    <RxCross2
                      onClick={() => {
                        setSlide("hide");
                      }}
                      className="fs-4 me-1 cursor-pointer"
                    />
                  </div>
                  <hr />
                  <div className="text-editor">
                    <ReactQuill
                      className="mt-3"
                      theme="snow"
                      value={quillState}
                      onChange={setQuillState}
                      value={inputValue}
                      onChange={changeInputText}
                    />
                  </div>
                  <p className="small-text mt-2 text-dark">
                    Add a short paragraph
                  </p>
                </div>
              ) : type === "button" ? (
                <>
                  {/*<div className="button-slide">
                    <div className="input w-100 d-flex align-items-center justify-content-between pt-3 px-3">
                      <h5 className="mb-0">
                        <span className="input-icon">
                          <IoRadioButtonOnSharp />
                        </span>
                        Button
                      </h5>
                      <RxCross2
                        onClick={() => {
                          setSlide("hide");
                        }}
                        className="fs-4 me-1 cursor-pointer"
                      />
                    </div>
                    <hr />
                    <div className="prop d-flex align-items-start flex-column justify-content-between pt-3 px-3 w-100">
                      <p className="text-nowrap mb-0">Heading Font Size</p>

                      <input
                        type="text"
                        name="buttonText"
                        className="mt-1 w-100 "
                        defaultValue={submit}
                        onChange={handleSubmitBtn}
                      />
                    </div>

                    <div className="prop d-flex align-items-center justify-content-between mt-3 gap-10 px-3">
                      <p className="text-nowrap mb-0">Button Font Style</p>
                      <div className="btn_">
                        <button
                          className={`${btnBold ? "active-btn" : ""}`}
                          onClick={() => setBtnBold(!btnBold)}
                        >
                          <FaBold />
                        </button>
                        <button
                          className={`${btnItalic ? "active-btn" : ""}`}
                          onClick={() => setBtnItalic(!btnItalic)}
                        >
                          <FaItalic />
                        </button>
                      </div>
                    </div>
                    <div className="prop d-flex align-items-start px-3 flex-column mt-4">
                      <p className="mb-1">Height</p>
                      <input
                        type="number"
                        name="height"
                        defaultValue="42"
                        className="w-100"
                        onChange={(e) => {
                          setBtnHeight(e.target.value);
                        }}
                      />
                    </div>

                    <div className="prop d-flex align-items-start px-3 flex-column mt-4">
                      <p className="mb-1">Button Text Font Size</p>
                      <input
                        type="number"
                        name="fontSize"
                        defaultValue="20"
                        className="w-100"
                        onChange={(e) => {
                          setBtnFontSize(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {Object.keys(buttonProperties).map((key) => {
                    const property = buttonProperties[key];
                    return (
                      <div key={key} className="button-slide">
                        <label>{property.label}</label>
                        {property.type === "number" ? (
                          <input
                            type="number"
                            className="w-100"
                            defaultValue={property.defaultValue}
                            onChange={
                              key === "fontSize"
                                ? (e) => setBtnFontSize(e.target.value)
                                : key === "height"
                                ? (e) => setBtnHeight(e.target.value)
                                : null
                            }
                          />
                        ) : key === "bold" ? (
                          <div
                            className="prop"
                            onClick={() => setBtnBold(!btnBold)}
                          >
                            <FaBold />
                          </div>
                        ) : key === "italic" ? (
                          <div
                            className="prop"
                            onClick={() => setBtnItalic(!btnItalic)}
                          >
                            <FaItalic />
                          </div>
                        ) : (
                          <input
                            type="text"
                            className="w-100"
                            defaultValue={property.defaultValue}
                            onChange={handleSubmitBtn}
                          />
                        )}
                      </div>
                    );
                  })}
                </>
              ) : null}
              */}
              {mainType === "form-header" &&
                renderProperties(formHeaderProperties, mainId)}
              {mainType === "text" &&
                renderProperties(shortTextProperties, mainId)}
              {mainType === "button" && renderProperties(buttonProperties)}
            </div>
          </div>
        </div>
      </Layout>
    </listState>
  );
};

export default Home;
