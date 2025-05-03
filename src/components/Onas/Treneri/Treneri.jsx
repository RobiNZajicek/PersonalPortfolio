import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';
import Nara from '../../../assets/Nara.png';
import Striking from '../../../assets/Striking.png';
import Card from '../../../assets/cardsss.png';
import Upapousku from '../../../assets/hotelUPapousku.png';
import tri from '../../../assets/3d.png';
import "./Treneri.css";

const Treneri = () => {
  const { t } = useTranslation();
  const [hoveredTrainer, setHoveredTrainer] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mobilePopup, setMobilePopup] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTrainers, setActiveTrainers] = useState([0, 1, 2]);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isClient, setIsClient] = useState(false);

  // Define unfinished projects with their completion dates
  const unfinishedProjects = {
    "Physiotherapy": "2025-25-05",
    "3D Website": "2025-14-05",
    "Striking gym": "2025-12-5"
  };

  useEffect(() => {
    setIsClient(true);
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateCursor);
    return () => document.removeEventListener("mousemove", updateCursor);
  }, []);

  useEffect(() => {
    if (isClient) {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, [isClient]);

  const moveLeft = () => {
    setActiveTrainers((prev) => {
      const newTrainers = prev.map((index) => (index === 0 ? trainers.length - 1 : index - 1));
      return newTrainers;
    });
  };

  const moveRight = () => {
    setActiveTrainers((prev) => {
      const newTrainers = prev.map((index) => (index === trainers.length - 1 ? 0 : index + 1));
      return newTrainers;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const trainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const trainers = [
    {
      name: "NaraWebs",
      sport: "Website",
      image: Nara,
      linkGit: "https://github.com/RobiNZajicek",
      webLink: "https://narawebs.com",
      description: t("narawebs_description"),
    },
    {
      name: "Striking gym",
      sport: "Website with database",
      image: Striking,
      linkGit: "https://github.com/RobiNZajicek/Striking",
      webLink: "https://praguestrikingacademy.cz/",
      description: t("striking_description"),
      isUnfinished: true,
      completionDate: "2025-06-04"
    },
    {
      name: "Pension U Papoušků",
      sport: "Website",
      image: Upapousku,
      linkGit: "https://github.com/RobiNZajicek",
      webLink: "https://www.upapousku.cz/",
      description: t("pension_description"),
    },
    {
      name: "Sheel App",
      sport: "App for cards",
      image: Card,
      linkGit: "https://github.com/RobiNZajicek/cards",
      webLink: "https://vercel.com/zajicekrobin3gmailcoms-projects/cards-j8kl",
      description: t("sheel_description"),
    },
    {
      name: "3D Website",
      sport: "Project for networks",
      image: tri,
      linkGit: "https://github.com/RobiNZajicek/3D-websiteRobinTom",
      webLink: "/coming-soon",
      description: t("3d_description"),
      isUnfinished: true,
      completionDate: "2025-06-04"
    },
    {
      name: "Physiotherapy",
      sport: "Website",
      image: Nara,
      linkGit: "https://github.com/RobiNZajicek/fyz-web",
      webLink: "/coming-soon",
      description: t("fyzio_description"),
      isUnfinished: true,
      completionDate: "2025-06-04"
    },
  ];

  const renderTrainerCard = (trainer, index) => (
    <motion.div
      key={index}
      className="relative w-[250px] md:w-[300px] xl:w-[350px] bg-black overflow-hidden rounded-xl group mb-8 m-auto md:mb-0"
      onMouseEnter={() => !isMobile && setHoveredTrainer(trainer)}
      onMouseLeave={() => !isMobile && setHoveredTrainer(null)}
      onClick={() => isMobile && setMobilePopup(trainer)}
      variants={trainerVariants}
    >
      {/* Unfinished project banner */}
      {trainer.isUnfinished && (
        <div className="absolute top-0 left-0 right-0 bg-red-700 text-black text-center py-1 z-20 font-bold text-xs sm:text-sm">
          In progress - Coming {new Date(trainer.completionDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })}
        </div>
      )}
      
      <div className="absolute inset-0 z-10 group-hover:bg-white/5 transition-all duration-300"></div>
      
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-full h-auto z-0 transition-all duration-300 box-shd cursor-pointer"
        priority
      />

      <div className="absolute bottom-5 right-4 flex gap-2 z-30">
        <a href={trainer.linkGit} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center rounded-2xl'>
          <FaGithub size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[17px]" />
        </a>
        <a href={trainer.webLink} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center rounded-2xl'>
          <CiGlobe size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[17px]" />
        </a>
      </div>

      <div className="text-white font-bold flex flex-row p-2 z-30">
        <div className="w-[4px] h-10 bg-blue-500 mb-0 mr-4"></div>
        <div className="flex flex-col">
          <span className="block text-primary text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] Dosxl:text-[18px] font-orbion font-black">{trainer.name}</span>
          <span className="block text-gray-300 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] Dosxl:text-[12px] font-orbion font-black">{trainer.sport}</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col items-center text-white py-12 bg-[#00060E] relative pb-44 overflow-x-hidden px-4">
      <div className="TreninkBlurosss"></div>
      <div className="TreninkBlurosssTop"></div>

      <h2 className="text-[30px] mt-8 xl:mt-24 sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-orbion font-black text-primary glow-text">
        {t("my_projects")}
      </h2>
      <span className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] z-50 xl:text-[17px] Dosxl:text-[18px] text-center font-medium text-[#BDBDBD] mt-4 mb-4 w-full max-w-2xl px-4">
        {t("projects_intro")}
      </span>

      {/* Mobile View - All projects stacked vertically */}
      <div className="md:hidden w-full max-w-md mx-auto">
        {trainers.map((trainer, index) => renderTrainerCard(trainer, index))}
      </div>

      {/* Desktop View - Horizontal carousel with arrows */}
      <motion.div
        ref={ref}
        className="hidden md:flex flex-row justify-center gap-8 Dosxl:gap-6 xl:gap-6 md:gap-4 mt-8 relative items-center w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        key={activeTrainers.join(",")}
      >
        <button
          onClick={moveLeft}
          className="absolute left-0 z-50 p-2 -ml-4 bg-black/50 rounded-full hover:bg-black/80 transition duration-300"
        >
          <FaArrowLeft size={24} className="text-white xl:size-4 md:size-3" />
        </button>

        {activeTrainers.map((index) => renderTrainerCard(trainers[index], index))}

        <button
          onClick={moveRight}
          className="absolute right-0 z-50 p-2 bg-black/50  rounded-full -mr-4 hover:bg-black/80 transition duration-300"
        >
          <FaArrowRight size={24} className="text-white xl:size-4 md:size-3" />
        </button>
      </motion.div>

      {/* Hover description box (PC) */}
      {!isMobile && hoveredTrainer && (
        <motion.div
          className="fixed bg-blue-500 xl:h-[225px] w-[275px] xl:p-4 xl:w-[320px] Dosxl:h-[230px] p-6 z-50 text-white rounded-xl shadow-lg hidden md:flex"
          style={{ top: cursorPos.y + 10, left: cursorPos.x + 10 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex relative flex-col">
            <h3 className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] z-50 xl:text-[16px] Dosxl:text-[18px] font-black font-orbion">{hoveredTrainer.name}</h3>
            <h3 className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] z-50 xl:text-[16px] Dosxl:text-[18px] font-black mb-4 font-orbion">{hoveredTrainer.sport}</h3>
            {hoveredTrainer.isUnfinished && (
              <div className="bg-red-500 text-black px-2 py-1 rounded mb-2 text-xs font-bold">
                In progress - Coming {new Date(hoveredTrainer.completionDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })}
              </div>
            )}
            <p className="font-sans font-bold text-[14px]">{hoveredTrainer.description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Treneri;