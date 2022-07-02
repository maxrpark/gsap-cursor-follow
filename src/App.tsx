import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import { CursorFollowTs, CursorFollowJS, Navbar } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <CursorFollowTs />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
