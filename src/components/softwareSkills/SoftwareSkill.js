import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  // Flatten all skills into a single array
  const allSkills = [
    ...skillsSection.softwareSkills.webDevelopment,
    ...skillsSection.softwareSkills.coding,
    ...skillsSection.softwareSkills.tools,
  ];

  // Split the flattened array into two rows
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
