import React, { useState } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { SKILLS } from "../../utils/data";
import {motion } from 'framer-motion'
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
const Skills = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to access translations
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('skillsossss');

    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight && !isVisible) {
        setIsVisible(true);
      }
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array ensures it runs only once on mount
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <motion.section initial={{ opacity: 0,y:100 }}
    animate={ isVisible?{opacity:1,y:0}:{opacity:0,y:100}}
    transition={{ duration: 2.5, type:'spring',delay:0.2 }} id="skillsossss" className="skills-container">
      <h5>{t("technical")}</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
