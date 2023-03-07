import React from "react";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={20}
          outerSize={15}
          color="0, 0 ,0"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={7}
        />
      </div>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
