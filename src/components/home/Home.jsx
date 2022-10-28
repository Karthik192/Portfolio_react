import React, { useState } from "react";
import "./Home.css";
import Me from "../../assets/profile.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="profile" className="home__img"/>
        <h1 className="home__name">Deva Karthik</h1>
        <span className="home__education" id="home__desc">
            I'm a Developer
        </span>
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
