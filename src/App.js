import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  WhatMZT2,
  Header,
  Features,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatMZT2 />
      <Features />
      <Possibility />
      <CTA />
    </div>
  );
}

export default App;
