import TxtGame from '../../../assets/txtGame.png'
import Nara from '../../../assets/Nara.png'
import Striking from '../../../assets/Striking.png'
import Card from '../../../assets/cardsss.png'
import Upapousku from '../../../assets/hotelUPapousku.png'
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaArrowLeft, FaArrowRight,FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import tri from '../../../assets/3d.png'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Treneri.css";

const trainers = [
  {
    name: "NaraWebs",
    sport: "Website",
    image: Nara,
    linkGit: '',
    webLink: 'https://narawebs.com',
    description:
      "Firemní prezentace mé webové agentury NaraWebs. Moderní, rychlý a responzivní web, kde nabízím své služby a ukazuji své schopnosti na reálném produktu.",
  },
  {
    name: "Sheel App",
    sport: "App for cards",
    image: Card,
    linkGit: 'https://github.com/RobiNZajicek/cards',
    webLink: 'https://vercel.com/zajicekrobin3gmailcoms-projects/cards-j8kl',
    description:
      "Aplikace vytvořená na míru pro firmu, která generuje a tiskne personalizované kartičky na základě formuláře. Data se ukládají do databáze, odkud je může firma kdykoli spravovat.",
  },
  {
    name: "Striking",
    sport: "Website with database",
    linkGit: 'https://github.com/RobiNZajicek/Striking',
    webLink: 'https://praguestrikingacademy.cz/',
    image: Striking,
    description:
      "Kompletní web pro sportovní klub s registračním systémem, správou tréninků, přehledem plateb a uživatelským rozhraním pro majitele i členy. Postaveno s důrazem na funkčnost a jednoduchost použití.",
  },
  {
    name: "Penzion U Papoušků",
    sport: "Website",
    image: Upapousku,
    linkGit: '',
    webLink: 'https://www.upapousku.cz/',
    description:
      "Jednoduchý a elegantní web pro menší penzion. Prezentuje ubytování, poskytuje základní informace a umožňuje rychlý kontakt pro rezervace.",
  },
  {
    name: "3D Website",
    sport: "Project for networks",
    image: tri,
    linkGit: 'https://github.com/RobiNZajicek/3D-websiteRobinTom',
    webLink: '',
    description:
      "Interaktivní webová aplikace, kde si uživatel nahraje 3D model, nastaví parametry tisku a odešle soubor do fronty na 3D tisk. Projekt zahrnuje front-end i napojení na reálné zařízení.",
  },
  {
    name: "Fyzioterapie",
    sport: "Website",
    image: Nara,
    linkGit: 'https://github.com/RobiNZajicek/fyz-web',
    webLink: '',
    description:
      "Designově čistý a přehledný web pro fyzioterapeutické centrum. Obsahuje informace o službách, možnost rezervace a responzivní rozhraní přizpůsobené pro klienty všech věkových kategorií.",
  },
];

const Treneri = () => {
  const [hoveredTrainer, setHoveredTrainer] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mobilePopup, setMobilePopup] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTrainers, setActiveTrainers] = useState([0, 1, 2]); // Start with first three trainers
  const { ref, inView } = useInView({ triggerOnce: true }); // Trigger animation only once
  const [isClient, setIsClient] = useState(false); // Track if the component is on the client side

  useEffect(() => {
    // Set isClient to true once the component mounts (client-side)
    setIsClient(true);

    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateCursor);
    return () => document.removeEventListener("mousemove", updateCursor);
  }, []);

  useEffect(() => {
    if (isClient) {
      // Only run this effect on the client side
      const checkMobile = () => setIsMobile(window.innerWidth < 1024);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, [isClient]); // Add isClient as a dependency

  // Function to move trainers to the left
  const moveLeft = () => {
    setActiveTrainers((prev) => {
      const newTrainers = prev.map((index) => (index === 0 ? trainers.length - 1 : index - 1));
      return newTrainers;
    });
  };

  // Function to move trainers to the right
  const moveRight = () => {
    setActiveTrainers((prev) => {
      const newTrainers = prev.map((index) => (index === trainers.length - 1 ? 0 : index + 1));
      return newTrainers;
    });
  };

  // Animation variants for the trainers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Slower stagger
        delayChildren: 0.2,
      },
    },
  };

  const trainerVariants = {
    hidden: { opacity: 0, y: 50 }, // Start further down for smoother effect
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Slower and smoother
  };

  return (
    <div className="flex flex-col items-center text-white py-12 bg-[#00060E] relative pb-44">
      <div className="TreninkBlurosss"></div>
      <div className="TreninkBlurosssTop"></div>

      <h2 className="text-[30px] mt-8 xl:mt-24 sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-orbion font-black text-primary  glow-text">
        My Projects
      </h2>
      <span className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] z-50 xl:text-[17px] Dosxl:text-[18px] text-center font-medium text-[#BDBDBD] mt-4 mb-4 w-4/6 sm:w-4/6 md:w-4/6 lg:w-3/6 Dosxl:1/6 font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, adipisci! Ut magni dolores ipsa vel, provident consequatur soluta nesciunt, molestiae esse et placeat corporis eum labore maxime possimus molestias sint!
      </span>

      {/* Trainers List */}
      <motion.div
        ref={ref}
        className="flex flex-col md:flex-row gap-8 Dosxl:gap-6 xl:gap-6 md:gap-4 mt-8 relative items-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        key={activeTrainers.join(",")} // Force re-render when activeTrainers changes
      >
        {/* Left Arrow */}
        <button
          onClick={moveLeft}
          className="absolute left-0 z-50 p-2 -ml-14 md:flex hidden bg-black/50 rounded-full hover:bg-black/80 transition duration-300"
        >
          <FaArrowLeft size={24} className="text-white xl:size-4 md:size-3" />
        </button>

        {/* Trainers */}
        {activeTrainers.map((index) => {
          const trainer = trainers[index];

          return (
            <motion.div
              key={index}
              className="relative w-[400px] bg-black overflow-hidden rounded-xl group"
              onMouseEnter={() => !isMobile && setHoveredTrainer(trainer)}
              onMouseLeave={() => !isMobile && setHoveredTrainer(null)}
              onClick={() => isMobile && setMobilePopup(trainer)}
              variants={trainerVariants} // Apply animation to all trainers
            >
              {/* Dark Overlay */}


              {/* Trainer Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                objectFit="cover"
                className=" z-20 transition-all duration-300 box-shd cursor-pointer  "
                fill
                priority
              />

              {/* Social Icons */}
              <div className="absolute bottom-5 right-4 flex  gap-2   z-30">
                <a href={trainer.linkGit} target="_blank" rel="noopener noreferrer" className='   flex justify-center items-center rounded-2xl'>
                  <FaGithub  size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[17px]" />
                </a>
                <a href={trainer.webLink} target="_blank" rel="noopener noreferrer" className='  flex justify-center items-center  rounded-2xl'>
                  <CiGlobe  size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[17px]" />
                </a>
              </div>

              {/* Trainer Info */}
              <div className=" text-white font-bold flex flex-row p-2  z-30">
                <div className="w-[4px] h-10 bg-blue-500 mb-0 mr-4 "></div>
                <div className="flex flex-col ">
                  <span className="block text-primary text-[15px] sm:text-[16px] md:text-[15px] lg:text-[16px] Dosxl:text-[18px] font-orbion font-black">{trainer.name}</span>
                  <span className="block text-gray-300 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] Dosxl:text-[12px] font-orbion font-black">{trainer.sport}</span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Right Arrow */}
        <button
          onClick={moveRight}
          className="absolute right-0 z-50 p-2 bg-black/50 md:flex hidden -mr-14 rounded-full hover:bg-black/80 transition duration-300"
        >
          <FaArrowRight size={24} className="text-white  xl:size-4 md:size-3 md:flex hidden" />
        </button>
      </motion.div>

      {/* Hover description box (PC) */}
      {!isMobile && hoveredTrainer && (
        <motion.div
          className="fixed bg-blue-500 xl:w-[290px] xl:h-[225px] xl:p-4 Dosxl:w-[320px] Dosxl:h-[230px] p-6 z-50 text-white rounded-xl shadow-lg hidden md:flex"
          style={{ top: cursorPos.y + 10, left: cursorPos.x + 10 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex relative flex-col">
            <h3 className=" text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] z-50 xl:text-[18px] Dosxl:text-[18px] font-black font-orbion">{hoveredTrainer.name}</h3>
            <h3 className=" text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] z-50 xl:text-[18px] Dosxl:text-[18px] font-black mb-4 font-orbion">{hoveredTrainer.sport}</h3>
            <p className="font-sans font-bold text-[14px]">{hoveredTrainer.description}</p>
            
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Treneri;