import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Navbar from "../navbar/Navbar";
import Projects from "../project/Projects";
import Skills from "../Skills";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Portfolio;
