import React from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} width="30px" alt="logo" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
              <i className="icon-home" />
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"/>
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="icon-chemistry" />
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation" />
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="icon-layers" />
              </a>
            </li>

            <li className="nav__item">
              <a href="#testimonials" className="nav__link">
                <i className="icon-people" />
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble" />
              </a>
            </li>
          </ul>
        </div>
      </nav>


      <div className="nav__footer">
        <span className="copyright">&copy; 2022 - 2023.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
