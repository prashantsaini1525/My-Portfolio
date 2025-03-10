import React, { useState, useEffect, useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const { isDark } = useContext(StyleContext);
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile based on window width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    // Set initial state
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!achievementSection.display) {
    return null;
  }

  const content = (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1
            className={
              isDark
                ? "dark-mode heading achievement-heading"
                : "heading achievement-heading"
            }
          >
            {achievementSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {achievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achievementsCards.map((card, i) => (
            <AchievementCard
              key={i}
              isDark={isDark}
              cardInfo={{
                title: card.title,
                description: card.subtitle,
                image: card.image,
                imageAlt: card.imageAlt,
                footer: card.footerLink,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Use Fade animation on larger screens; for mobile, render directly
  return isMobile ? content : (
    <Fade bottom duration={1000} distance="20px">
      {content}
    </Fade>
  );
}
