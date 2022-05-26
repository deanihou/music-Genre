import "./App.css";

import React from "react";
import Container from "./Pages/Container";
import Footer from "./Components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <motion.div className="relative dark:bg-gray-900 bg-slate-100">
      <Router>
        <AnimatePresence>
          <Container />
        </AnimatePresence>
      </Router>
      <Footer />
    </motion.div>
  );
}

export default App;
