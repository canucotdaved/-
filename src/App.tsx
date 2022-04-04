import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
function App() {
  return (
    <div className="bg-gradient-radial-to-br from-[#414347] to-[#181B1E] h-full bg-fixed">
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
