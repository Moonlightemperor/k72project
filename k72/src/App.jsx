import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Agence from "./Pages/Agence";
import Navbar from "./Components/Navigation/Navbar";
import FullScreenNav from "./Components/Navigation/FullScreenNav";

const App = () => {
  return (
    <div>
      <Navbar />
      <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default App;
