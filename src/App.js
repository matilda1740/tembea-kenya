import React, { Component } from "react";
import Tours from "./components/TourList/Tourslist";
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Navbar />
        <Route path="/tours" component={Tours} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </section>
    </BrowserRouter>
  );
}

export default App;
