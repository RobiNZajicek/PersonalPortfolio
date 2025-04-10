import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import './Experience.css'
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles.js";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion.js";
import { useTranslation } from 'react-i18next';

const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation(); // Use the useTranslation hook to access translations
  return (
    <VerticalTimelineElement
    
      contentStyle={{
        background: '#3b82f6',backgroundSize:'cover',backgroundRepeat:'no-repeat',
        color: "black",
     
      }}
      contentArrowStyle={{ borderRight: "7px solid  white" }}
      date={<span style={{ fontWeight: 'bold', color: '#3b82f6' }} >{experience.date}</span>}
      iconStyle={{ background: '#3b82f6'}}
      icon={
        <div className='black flex justify-center items-center w-full h-full'>
          <span
            src={experience.icon}
            alt={experience.company_name}
            className='w-[90%] font-bold  h-[90%] object-contain'
          />
        
        </div>
      }
    >
      <div>
        <h3 className='font-ed text-[34px] font-extrabold glow-textos'>{t(experience.title)}</h3>
        <h2
          className='  text-[20px] text-white font-bold'
          style={{ margin: 0 }}
        >
         <span className="text-white">{t(experience.company_name)}</span> 
        </h2>
      </div>

      <ul className='mt-5 text-white list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className=' text-[15px] max-xl:text-[13px] max-md:text-[11px] font-normal text-white pl-1 tracking-wider'
          >
            {t(point)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to access translations

  return (
    <section id="experience" className='works'>
      <motion.div variants={textVariant()} >
        <p className={`${styles.sectionSubText} text-center text-blue-500`}>
         {t("experience_subtext")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center glow-text`}>
          {t("experience_title")}   
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col bg text-white'>
        <VerticalTimeline className='before:bg-white '>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
