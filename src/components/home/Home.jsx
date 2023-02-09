import React, { useState } from "react";
import "./Home.css";
import Me from "../../assets/profile.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import KUTE from "kute.js";

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

        {/* <Shapes /> */}
        <div class="blob">
          <div class="cont">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#fd4444"
                stroke="#fd4444"
                stroke-width="1"
                transform="translate(100 100)"
              >
                <animate
                  attributeName="d"
                  dur="5000ms"
                  repeatCount="indefinite"
                  values="M34.6,-43.1C48.2,-29.8,65,-22.1,71.3,-9.2C77.6,3.7,73.4,21.8,62.1,30.6C50.8,39.4,32.4,38.8,16,45.4C-0.3,51.9,-14.6,65.6,-29.6,66.6C-44.7,67.6,-60.4,55.8,-67.8,40.4C-75.1,25.1,-73.9,6.1,-70,-11.7C-66,-29.4,-59.3,-46,-47.1,-59.6C-35,-73.1,-17.5,-83.7,-3.5,-79.5C10.5,-75.3,21,-56.4,34.6,-43.1Z;
              M35.8,-46.9C47.6,-32.8,59.1,-22.6,65.2,-8.5C71.3,5.7,71.9,23.8,62.5,32.2C53,40.5,33.4,39.2,16.4,45.5C-0.5,51.8,-14.8,65.8,-28.1,65.9C-41.5,66,-53.9,52.1,-55.1,37.8C-56.3,23.4,-46.4,8.5,-41,-4.6C-35.6,-17.8,-34.8,-29.1,-28.7,-44.2C-22.6,-59.3,-11.3,-78.1,0.4,-78.5C12,-78.9,24,-60.9,35.8,-46.9Z;
              M40.4,-57.3C45,-44.3,36.4,-24.6,37,-8.4C37.5,7.7,47.3,20.3,46.5,31.9C45.8,43.5,34.7,54.2,23.5,53.4C12.4,52.5,1.1,40.2,-13.4,35.5C-27.9,30.8,-45.7,33.7,-58.3,26.6C-70.9,19.4,-78.2,2.1,-78.4,-16.7C-78.5,-35.6,-71.3,-56,-57.1,-67.4C-42.8,-78.8,-21.4,-81,-1.8,-78.9C17.9,-76.8,35.8,-70.4,40.4,-57.3Z;
              M51.4,-58.5C62.8,-51.6,65.8,-31.9,63.3,-15.7C60.8,0.5,52.8,13.2,45.8,27.5C38.8,41.7,32.7,57.5,19.7,68.4C6.7,79.2,-13.2,85.2,-30,80.1C-46.7,75,-60.3,58.8,-65.3,41.8C-70.3,24.7,-66.7,6.8,-60.6,-7.7C-54.5,-22.2,-45.9,-33.3,-35.3,-40.3C-24.8,-47.3,-12.4,-50.3,3.8,-54.8C20,-59.3,39.9,-65.3,51.4,-58.5Z;
              M34.6,-43.1C48.2,-29.8,65,-22.1,71.3,-9.2C77.6,3.7,73.4,21.8,62.1,30.6C50.8,39.4,32.4,38.8,16,45.4C-0.3,51.9,-14.6,65.6,-29.6,66.6C-44.7,67.6,-60.4,55.8,-67.8,40.4C-75.1,25.1,-73.9,6.1,-70,-11.7C-66,-29.4,-59.3,-46,-47.1,-59.6C-35,-73.1,-17.5,-83.7,-3.5,-79.5C10.5,-75.3,21,-56.4,34.6,-43.1Z"
                />
              </path>
            </svg>
          </div>
        </div>
        <div class="blob">
          <div class="cont">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="none"
                stroke="#000000"
                stroke-width="1"
                transform="translate(100 100)"
              >
                <animate
                  attributeName="d"
                  dur="5000ms"
                  repeatCount="indefinite"
                  values="M34.6,-43.1C48.2,-29.8,65,-22.1,71.3,-9.2C77.6,3.7,73.4,21.8,62.1,30.6C50.8,39.4,32.4,38.8,16,45.4C-0.3,51.9,-14.6,65.6,-29.6,66.6C-44.7,67.6,-60.4,55.8,-67.8,40.4C-75.1,25.1,-73.9,6.1,-70,-11.7C-66,-29.4,-59.3,-46,-47.1,-59.6C-35,-73.1,-17.5,-83.7,-3.5,-79.5C10.5,-75.3,21,-56.4,34.6,-43.1Z;
              M35.8,-46.9C47.6,-32.8,59.1,-22.6,65.2,-8.5C71.3,5.7,71.9,23.8,62.5,32.2C53,40.5,33.4,39.2,16.4,45.5C-0.5,51.8,-14.8,65.8,-28.1,65.9C-41.5,66,-53.9,52.1,-55.1,37.8C-56.3,23.4,-46.4,8.5,-41,-4.6C-35.6,-17.8,-34.8,-29.1,-28.7,-44.2C-22.6,-59.3,-11.3,-78.1,0.4,-78.5C12,-78.9,24,-60.9,35.8,-46.9Z;
              M40.4,-57.3C45,-44.3,36.4,-24.6,37,-8.4C37.5,7.7,47.3,20.3,46.5,31.9C45.8,43.5,34.7,54.2,23.5,53.4C12.4,52.5,1.1,40.2,-13.4,35.5C-27.9,30.8,-45.7,33.7,-58.3,26.6C-70.9,19.4,-78.2,2.1,-78.4,-16.7C-78.5,-35.6,-71.3,-56,-57.1,-67.4C-42.8,-78.8,-21.4,-81,-1.8,-78.9C17.9,-76.8,35.8,-70.4,40.4,-57.3Z;
              M51.4,-58.5C62.8,-51.6,65.8,-31.9,63.3,-15.7C60.8,0.5,52.8,13.2,45.8,27.5C38.8,41.7,32.7,57.5,19.7,68.4C6.7,79.2,-13.2,85.2,-30,80.1C-46.7,75,-60.3,58.8,-65.3,41.8C-70.3,24.7,-66.7,6.8,-60.6,-7.7C-54.5,-22.2,-45.9,-33.3,-35.3,-40.3C-24.8,-47.3,-12.4,-50.3,3.8,-54.8C20,-59.3,39.9,-65.3,51.4,-58.5Z;
              M34.6,-43.1C48.2,-29.8,65,-22.1,71.3,-9.2C77.6,3.7,73.4,21.8,62.1,30.6C50.8,39.4,32.4,38.8,16,45.4C-0.3,51.9,-14.6,65.6,-29.6,66.6C-44.7,67.6,-60.4,55.8,-67.8,40.4C-75.1,25.1,-73.9,6.1,-70,-11.7C-66,-29.4,-59.3,-46,-47.1,-59.6C-35,-73.1,-17.5,-83.7,-3.5,-79.5C10.5,-75.3,21,-56.4,34.6,-43.1Z"
                />
              </path>
            </svg>
          </div>
        </div>
        <div class="blob">
          <div class="cont">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="none"
                stroke="#000000"
                stroke-width="1"
                transform="translate(100 100)"
              >
                <animate
                  attributeName="d"
                  dur="5000ms"
                  repeatCount="indefinite"
                  values="
                  M34.6,-43.1C48.2,-29.8,65,-22.1,71.3,-9.2C77.6,3.7,73.4,21.8,62.1,30.6C50.8,39.4,32.4,38.8,16,45.4C-0.3,51.9,-14.6,65.6,-29.6,66.6C-44.7,67.6,-60.4,55.8,-67.8,40.4C-75.1,25.1,-73.9,6.1,-70,-11.7C-66,-29.4,-59.3,-46,-47.1,-59.6C-35,-73.1,-17.5,-83.7,-3.5,-79.5C10.5,-75.3,21,-56.4,34.6,-43.1Z;
              M35.8,-46.9C47.6,-32.8,59.1,-22.6,65.2,-8.5C71.3,5.7,71.9,23.8,62.5,32.2C53,40.5,33.4,39.2,16.4,45.5C-0.5,51.8,-14.8,65.8,-28.1,65.9C-41.5,66,-53.9,52.1,-55.1,37.8C-56.3,23.4,-46.4,8.5,-41,-4.6C-35.6,-17.8,-34.8,-29.1,-28.7,-44.2C-22.6,-59.3,-11.3,-78.1,0.4,-78.5C12,-78.9,24,-60.9,35.8,-46.9Z;
              M40.4,-57.3C45,-44.3,36.4,-24.6,37,-8.4C37.5,7.7,47.3,20.3,46.5,31.9C45.8,43.5,34.7,54.2,23.5,53.4C12.4,52.5,1.1,40.2,-13.4,35.5C-27.9,30.8,-45.7,33.7,-58.3,26.6C-70.9,19.4,-78.2,2.1,-78.4,-16.7C-78.5,-35.6,-71.3,-56,-57.1,-67.4C-42.8,-78.8,-21.4,-81,-1.8,-78.9C17.9,-76.8,35.8,-70.4,40.4,-57.3Z;
              M51.4,-58.5C62.8,-51.6,65.8,-31.9,63.3,-15.7C60.8,0.5,52.8,13.2,45.8,27.5C38.8,41.7,32.7,57.5,19.7,68.4C6.7,79.2,-13.2,85.2,-30,80.1C-46.7,75,-60.3,58.8,-65.3,41.8C-70.3,24.7,-66.7,6.8,-60.6,-7.7C-54.5,-22.2,-45.9,-33.3,-35.3,-40.3C-24.8,-47.3,-12.4,-50.3,3.8,-54.8C20,-59.3,39.9,-65.3,51.4,-58.5Z;
              M34.6,-43.1C48.2,-29.8,65,-22.1,71.3,-9.2C77.6,3.7,73.4,21.8,62.1,30.6C50.8,39.4,32.4,38.8,16,45.4C-0.3,51.9,-14.6,65.6,-29.6,66.6C-44.7,67.6,-60.4,55.8,-67.8,40.4C-75.1,25.1,-73.9,6.1,-70,-11.7C-66,-29.4,-59.3,-46,-47.1,-59.6C-35,-73.1,-17.5,-83.7,-3.5,-79.5C10.5,-75.3,21,-56.4,34.6,-43.1Z"
                />
              </path>
            </svg>
          </div>
        </div>
      </section>
      <div className="rel">
        <div className="spacer layer1"></div>
      </div>
    </>
  );
};

export default Home;
