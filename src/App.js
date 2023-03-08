import React, { useCallback, useContext, useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import "./App.css";
import "./script";
import { DarkModeProvider } from "./context/DarkModeContext";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualifications/Qualification";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  return (
    <DarkModeProvider>
      <div>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Footer />
        </main>
        <ScrollUp />
      </div>
    </DarkModeProvider>
  );
};
export default App;
