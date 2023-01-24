import React, { useCallback, useContext, useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import "./App.css";
import "./script";
import { DarkModeProvider } from "./context/DarkModeContext";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <DarkModeProvider>
      <div>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
        </main>
      </div>
    </DarkModeProvider>
  );
};
export default App;
