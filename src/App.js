// Import React
import React, { useState } from "react";
// import Framer Motion
import { motion } from "framer-motion";
//Import App CSS
import "./App.css";
//import Route
import { Route } from "react-router-dom";
//Import Sticky Form
import Whiteboard from "./components/Whiteboard/Whiteboard";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, type: `spring`, stiffness: 120 }}
      >
        Sticky Task
      </motion.h1>
      <Whiteboard />
    </div>
  );
}

export default App;
