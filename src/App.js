import React from "react";
import "./App.css";

import AboutUs from "./components/Content/AboutUs";
import Portfolio from "./components/Content/Portfolio";
import ContactUs from "./components/Content/ContactUs";
import Services from "./components/Content/Service";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section id = "homepage">
        <HomePage/>
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default App;