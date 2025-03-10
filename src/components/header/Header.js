import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  aboutSection,
  bigProjects,
  skillsSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  // Get the display flags for each section
  const viewAbout = aboutSection.display;
  const viewProjects = bigProjects.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewAbout && (
            <li>
              <a href="#about">About</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
