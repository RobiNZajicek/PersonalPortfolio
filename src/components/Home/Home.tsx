import React from 'react';
import './Home.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import RobinImg from '../../assets/RobinImg.jpg';
import Tape from '../../assets/tape.png';
import html from '../../assets/html.png';
import tailwind from '../../assets/tailwind.png';
import css from '../../assets/social.png';
import Sass from '../../assets/sass.png';
import Csrp from '../../assets/c-sharp.png';
import node from '../../assets/node-js.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import python from '../../assets/python.png';
import mySql from '../../assets/mysql.png';
import firebase from '../../assets/firebase.png';
import java from '../../assets/java.png';
import mongoDb from '../../assets/mogoDb.webp';
import ts from '../../assets/typescript.png';
import CV from '../../assets/CV/CV_RobinZajicek.pdf';
import ITs from '../../assets/ITs.json';
import Lottie from 'lottie-react';
import BoostStrap from '../../assets/bootstrap.png';
import { FaMousePointer } from "react-icons/fa";
import { motion } from 'framer-motion';
import { textVariant } from "../../utils/motion.js";
import { useTranslation } from 'react-i18next'; 
import { FaHandPointer } from "react-icons/fa6";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const changeLanguage = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', changeLanguage);
    return () => {
      i18n.off('languageChanged', changeLanguage);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'cz' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('cardScroll');

    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight && !isVisible) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [t("Robin Zajíček"), t("Full Stack Developer"), t("Web Designer")];
  const period = 1000;
  const frontEnd = [
    { id: 1, src: html, alt: 'HTML' },
    { id: 2, src: css, alt: 'CSS' },
    { id: 3, src: js, alt: 'JavaScript' },
    { id: 4, src: ts, alt: 'TypeScript' },
    { id: 5, src: BoostStrap, alt: 'BoostStrap' },
    { id: 6, src: react, alt: 'React' },
    { id: 7, src: Sass, alt: 'Sass' },
    { id: 8, src: tailwind, alt: 'Tailwind CSS' },
  ];
  const BackEnd = [
    { id: 1, src: Csrp, alt: 'C#' },
    { id: 2, src: node, alt: 'Node.js' },
    { id: 3, src: python, alt: 'Python' },
    { id: 4, src: java, alt: 'Java' },
    { id: 5, src: firebase, alt: 'Firebase' },
    { id: 6, src: mongoDb, alt: 'MongoDB' },
    { id: 7, src: mySql, alt: 'MySQL' },
  ];
  const Database = [
    { id: 1, src: firebase, alt: 'Firebase' },
    { id: 2, src: mongoDb, alt: 'MongoDB' },
    { id: 3, src: mySql, alt: 'MySQL' },
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };
  const [showPointer, setShowPointer] = useState(true);

  useEffect(() => {
    // Function to toggle the opacity of the mouse pointer icon
    const toggleOpacity = () => {
      setShowPointer((prev) => !prev);
    };

    // Initial toggle after 1 second
    const initialTimeout = setTimeout(toggleOpacity, 1000);

    // Set interval to toggle every 2 seconds
    const interval = setInterval(toggleOpacity, 1000);

    // Clean up the timeouts and intervals on component unmount
    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []); // Empty dependency array so it runs only on mount


  return (
    <motion.div id='cardScroll' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 4.5, type: 'spring' }} className='home'>
      <motion.div className='home-container'>
        <div className='home-container-left'>
          <h1 className='home-text'>{t("hi_text")} <span className="txt-rotate border-r-8 border-b" data-rotate='[ "Full Stack Developer", "Web Designer", "Robin", "" ]'><span className="wrap">{text}</span></span></h1>
          <p className='home-par mt-4'>{t("intro_text")}</p>
          <div className='  mt-6 px-2 frontend flex rounded-md  text-white  items-center flex-row bg-purple-700'>
            <span className='font-semibold'>{t("front_end")}</span>
            <div className='flex-wrap flex gap-2 p-2'>
              {frontEnd.map((tech) => (
                <img key={tech.id} src={tech.src} alt={tech.alt} className='tech-icon' />
              ))}
            </div>
          </div>
          <div className='  mt-4 flex rounded-md px-2   text-white  items-center flex-row bg-purple-700 backend'>
            <span className='font-semibold'>{t("back_end")}</span>
            <div className='flex-wrap flex gap-2 p-2'>
              {BackEnd.map((tech) => (
                <img key={tech.id} src={tech.src} alt={tech.alt} className='tech-icon ' />
              ))}
            </div>
          </div>

          <div className='flex cursor-pointer absolute  items-center   flex-row gap-4 icns'>
          <FaHandPointer className={`w-6 h-6 poiner-2  ${showPointer ? "opacity-100" : "opacity-0"}`} />
            <a className='k h-16  w-16 flex justify-center items-center border-2-black rounded-full' href="https://www.linkedin.com/in/robin-zaj%C3%AD%C4%8Dek-86a537260/" target="_blank" rel="noreferrer">
              <FaLinkedin className='w-12 h-12 fill-white cursor-pointer ' />
            </a>
            <a href="https://github.com/RobiNZajicek" target="_blank" rel="noreferrer">
              <FaGithub className='w-12 h-12 cursor-pointer' />
            </a>
            <FaHandPointer className={`w-6 h-6 poiner-1   ${showPointer ? "opacity-100" : "opacity-0"}`} />
          </div>
        </div>
        <div className='flex items-start justify-center home-container-right'>
          <Lottie className='It-img mr-12' animationData={ITs} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;