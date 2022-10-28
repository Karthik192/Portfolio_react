import React, { useState } from "react";
import "./Home.css";
import Me from "../../assets/profile.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import KUTE from 'kute.js'

const Home = () => {
  // const tween = KUTE.fromTo(
  //   '#blob1',
  //   {path: '#blob2'},
  //   {path: '#blob1'},
  //   {repeat: 999, duration: 3000, yoyo: true}
  // );

  // tween.start();
  return (
    <>
      <section className="home container" id="home">
        <div className="intro pink">
          <img src={Me} alt="profile" className="home__img" />
          <h1 className="home__name">Deva Karthik</h1>
          <span className="home__education" id="home__desc">
            I'm a Developer
          </span>
          <HeaderSocials />

          <a href="#contact" className="btn">
            Hire Me
          </a>

          <ScrollDown />

          {/* <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="translate(449.2656637971438 300.4940537216659)">
              <path id="blob1"
                d="M163.5 -181.8C189.3 -137.7 172.2 -68.8 155.4 -16.7C138.7 35.4 122.4 70.7 96.5 120.7C70.7 170.7 35.4 235.4 -2.2 237.6C-39.8 239.8 -79.7 179.7 -111.8 129.7C-144 79.7 -168.5 39.8 -174 -5.5C-179.6 -50.9 -166.2 -101.8 -134 -146C-101.8 -190.2 -50.9 -227.6 9 -236.5C68.8 -245.5 137.7 -226 163.5 -181.8"
                fill="#000"
              ></path>
            </g>
            <g transform="translate(434.50243448632034 314.21805355964517)" className="hid">
              <path id="blob2"
                d="M163.4 -178.2C198.6 -128.2 204.8 -64.1 200.3 -4.5C195.8 55.2 180.6 110.3 145.5 151.5C110.3 192.6 55.2 219.8 -4.1 223.9C-63.4 228.1 -126.8 209.1 -153.6 168C-180.5 126.8 -170.7 63.4 -156.7 14C-142.7 -35.4 -124.4 -70.7 -97.5 -120.7C-70.7 -170.7 -35.4 -235.4 14.4 -249.7C64.1 -264.1 128.2 -228.2 163.4 -178.2"
                fill="#000"
              ></path>
            </g>
          </svg> */}

        </div>

        <Shapes />
      </section>
      <div className="rel">
        <div className="spacer layer1"></div>
      </div>
    </>
  );
};

export default Home;
