import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
