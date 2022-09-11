import React from "react";
import "./About.css";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Karthik, a developer based in India. I can use my critical
              thinking and problem-solving skills to face any challenge and give
              it a "coup de grace" with a touch of creativity. I have good
              knowledge of UI/UX designXdevelopment learned on my own that later
              became a hobby.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Databases</h3>
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage databases"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Coding</h3>
                <span className="skills__number ">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage coding"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
