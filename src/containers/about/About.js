import React, { useContext } from "react";
import "./About.scss";
import { aboutSection, illustration } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function About() {
  const { isDark } = useContext(StyleContext);
  if (!aboutSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="about">
      <div className="about-main-div">
        <Fade left duration={1000}>
          <div className="about-image-div">
            {illustration.animated && (
              <DisplayLottie animationData={codingPerson} />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="about-text-div">
            <h1 className={isDark ? "dark-mode about-heading" : "about-heading"}>
              {aboutSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle about-text-subtitle"
                  : "subTitle about-text-subtitle"
              }
            >
              {aboutSection.subTitle}
            </p>
            {aboutSection.aboutParagraphs.map((para, i) => (
              <p
                key={i}
                className={isDark ? "dark-mode about-text" : "about-text"}
              >
                {para}
              </p>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}
