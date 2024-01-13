import React from "react";
// import NewsLists from "./components/pages/NewsLists";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import logo from "./utils/Headline.png";
import Home from "./components/pages/Home";
import National from "./components/pages/National";

function App() {
  return (
    <Router>
      {/* <div className="bg-white"> */}
      <div className="tc">
        <img src={logo} alt="logo" />
      </div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/National" element={<National />}></Route>
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
