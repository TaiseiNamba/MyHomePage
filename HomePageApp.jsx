import { useState } from "react";
import Header from "./myHomePageComponents/Header_1.jsx";
import About from "./myHomePageComponents/About";
import Portfolio from "./myHomePageComponents/Portfolio";
import Contact from "./myHomePageComponents/Contact_1.jsx";
import Footer from "./myHomePageComponents/Footer";
// import CalculatorReact from "./calculatorReact/calculatorReact.jsx";

function HomePageApp() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      {/* <CalculatorReact /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePageApp;
