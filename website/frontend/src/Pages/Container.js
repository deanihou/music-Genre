import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import NF404 from "./NF404";
import About from "../Pages/About";
import Nav from "../Components/Nav";

const Container = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/sound" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NF404 />} /> {/* Not Found */}
      </Routes>
    </div>
  );
};

export default Container;
