import React from "react";
import "./Home.css";
import Me from "../../assets/profile.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" width="100px" />
        <h1 className="home__name">Deva Karthik</h1>
        <span className="home__education">I'm a Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
      

      <Shapes />
    </section>
  );
};

export default Home;
