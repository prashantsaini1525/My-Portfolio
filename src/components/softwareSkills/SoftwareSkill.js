import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  // Use the unified array from skillsSection
  const allSkills = skillsSection.softwareSkills;

  // Split the array into two rows
  const half = Math.ceil(allSkills.length / 2);
  const firstRow = allSkills.slice(0, half);
  const secondRow = allSkills.slice(half);

  return (
    <div className="software-skills-main-div">
      <div className="skills-row">
        {firstRow.map((skill, i) => (
          <div key={i} className="skill-item">
            <img
              src={skill.svgIconPath}
              alt={skill.skillName}
              className="skill-icon"
            />
            <p className="skill-label">{skill.skillName}</p>
          </div>
        ))}
      </div>
      <div className="skills-row">
        {secondRow.map((skill, i) => (
          <div key={i} className="skill-item">
            <img
              src={skill.svgIconPath}
              alt={skill.skillName}
              className="skill-icon"
            />
            <p className="skill-label">{skill.skillName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
