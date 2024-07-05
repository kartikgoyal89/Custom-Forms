import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Home1 from "./pages/Home1/Home1";
import { ItemsProvider } from "./context/itemContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ItemsProvider>
          <Routes>
            <Route path="/" element={<Home1 />} />
          </Routes>
        </ItemsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
