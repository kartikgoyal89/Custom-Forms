import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { DndContext } from "@dnd-kit/core";
import "./layout.css";
import { ItemsProvider } from "../../context/itemContext.jsx";
import { useItems } from "../../context/itemContext";

import Home from "../../pages/Home/Home";

const Layout = ({ children }) => {
  var [idCounter, setIdCounter] = useState(1);
  const { items, setItems } = useItems();
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === "droppable") {
      document.getElementById("droppable").dispatchEvent(
        new CustomEvent("itemDropped", {
          detail: { id: active.id },
        })
      );
    }
    setIdCounter((idCounter) => idCounter + 1);
    setItems((prevItems, prevCounter) => [
      ...prevItems,
      { id: idCounter, text: active.id, type: active.id, style: {} },
    ]);
  };

  const [sidebarItems, setSidebarItems] = useState([
    "form-header",
    "text",
    "short-text",
    "long-text",
    "number",
    "name",
    "email",
    "phone",
    "link",
    "address",
    "date",
    "time",
  ]);

  const handleDrop = (id) => {
    setSidebarItems((items) => [...items]);
  };
  return (
    <>
      <listState>
        <DndContext onDragEnd={handleDragEnd}>
          <Header />
          <div className="d-flex layout">
            <div className="sidebar" style={{ width: "22%" }}>
              <Sidebar items={sidebarItems} />
            </div>
            <div
              className="content"
              style={{ width: "78%", backgroundColor: "#f2f2f2" }}
            >
              {children}
            </div>
          </div>
        </DndContext>
      </listState>
    </>
  );
};

export default Layout;
export const listState = (props) => {
  return (
    <listState.Provider value={items}>{props.children}</listState.Provider>
  );
};
