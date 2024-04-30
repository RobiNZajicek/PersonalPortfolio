import React from 'react'
import './About.css'
import NumberCounter from 'number-counter';
import CV from '../../assets/CV/CV_RobinZajicek.pdf'
import {motion } from 'framer-motion'
import { useInView } from '../../UseInWiew';
import { textVariant } from "../../utils/motion.js";
import { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to access translations
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('your-element');

    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight && !isVisible) {
        setIsVisible(true);
      }
    }
  };

  // Add scroll event listener on component mount
  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }); // Empty array ensures it runs only once on mount
  const { ref, inView } = useInView();
  return (
    <motion.div id='your-element' initial={{ opacity: 0 }}
    animate={ isVisible?{opacity:1,y:0}:{opacity:0,y:50}}
    transition={{ duration: 2.5, type:'spring',delay:0.2 }} className='about '>
        <div className='about-container'>
          <div className='about-left'>
              <img src="" alt="" />
          </div>
          <div className='about-right'>
            <div className=' absolute bg-purple-700  blur-div'></div>
            <div className=' absolute bg-purple-700  blur-div-2'></div>
            <div className='ml-16'>
              <span className=' parss'>{t("about_me")}</span>
              <p className='mt-4 about-par'>
             
              {t("about_text")}                           
              </p>
            <div className='div-container mt-4'>
            <a href={CV} download='' className=" mt-0 bg-purple-600  text-white font-bold py-2 px-4 rounded inline-flex items-center max-lg:text-xs">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>{t("download_cv")}</span>
          </a>
          </div>
            {/* <div className='statosos stat-1 bg-purple-700'>
            <span className='statosos-s'>
                    <NumberCounter end={12} start={0} delay="2" />
                        <span className='statosos-s'>+</span>
                    </span>
                    <div className='linosos'></div>
                    <span className='statosos-st'>Websites made</span>
            </div>
            <div className='statosos stat-2 bg-purple-700'>
            <span className='statosos-s'>
                     <NumberCounter end={3} start={0} delay="2" />
                        <span className='statosos-s'>+</span>
                    </span>
                    <div className='linosos'></div>
                    <span className='statosos-st'>Years of Expirience</span>
            </div>
            <div className='statosos stat-3 bg-purple-700'>
            <span className='statosos-s'>
                    <NumberCounter end={40} start={0} delay="2" />
                        <span className='statosos-s'>+</span>
                    </span>
                    <div className='linosos'></div>
                    <span className='statosos-st'>Completed Projects</span>
            </div> */}
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default About