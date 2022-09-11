import React from "react";
import "./Skills.css";
import Data from "./Data";

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <h2 className="skills__category">UI/UX Development</h2>
      <br />
      <div className="skills__container grid">
        {Data.map(({ id, category, image, title, description }) => {
          if (category === "web") {
            return (
              <div className="skills__card" key={id}>
                <img src={image} width="100px" alt="" className="skills__img" />

                <h3 className="skills__title">{title}</h3>
                <p className="skills__description">{description}</p>
              </div>
            );
          }
        })}
      </div><br />

      <h2 className="skills__category">Programming Languages</h2>
      <br />
      <div className="skills__container grid">
        {Data.map(({ id, category, image, title, description }) => {
          if (category === "lang") {
            return (
              <div className="skills__card" key={id}>
                <img src={image} width="100px" alt="" className="skills__img" />

                <h3 className="skills__title">{title}</h3>
                <p className="skills__description">{description}</p>
              </div>
            );
          }
        })}
      </div><br />

      <h2 className="skills__category">Databases</h2>
      <br />
      <div className="skills__container grid">
        {Data.map(({ id, category, image, title, description }) => {
          if (category === "databases") {
            return (
              <div className="skills__card" key={id}>
                <img src={image} width="100px" alt="" className="skills__img" />

                <h3 className="skills__title">{title}</h3>
                <p className="skills__description">{description}</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Skills;
