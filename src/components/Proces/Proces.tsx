import { motion } from 'framer-motion';
import './Proces.css';
import Cv from '../../assets/CV/Robin_CV (9).pdf'
import { useTranslation } from 'react-i18next';
const Proces = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut'} },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut'  } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const { t } = useTranslation();
  return (
    <motion.div
      className='flex items-center flex-col mt-14 mb-36 md:mb-36 Dosxl:mb-72 md:0 bg-background relative about'
      initial='hidden'
      whileInView='visible'
      variants={staggerChildren}
      viewport={{ once: true }}
    >
      {/* Blur Effect */}
      <motion.div
        className='bluros blurss'
        variants={fadeIn}
      />

      {/* Title and Contact Button */}
      <motion.div
        className='flex flex-col gap-4 items-center'
        variants={fadeInUp}
      >
        <h1 className='text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px] Dosxl:text-[50px] font-black text-center glow-text'>
        {t('why_work_with_me')}
        </h1>
        <a href={Cv} download
          
          className='bg-[#3b82f6] z-20 flex cursor-pointer items-center justify-center font-sans w-[105px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[36px] sm:h-[40px] md:h-[44px] lg:h-[42px] xl:w-[135px] xl:h-[42px] Dosxl:w-[187px] Dosxl:h-[48px] border-2 border-[#3b82f6] rounded-xl text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] Dosxl:text-[16px] font-bold text-white'
        >
          {t('download_cv')}
        </a>
      </motion.div>

      {/* Advantages */}
      <motion.div
        className='flex flex-col md:flex-row gap-[5%] Dosxl:gap-[10%] mt-20 xl:mt-16 Dosxl:mt-44 md:mt-32 items-center justify-center'
        variants={staggerChildren}
      >
        {/* Advantage 1: Experience */}
        <motion.div
          className='flex flex-col justify-center items-center w-1/4'
          variants={fadeInUp}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="Dosxl:size-20 xl:size-16 size-14 mt-4 text-[#3b82f6]">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
          </svg>
          <span className='text-[20px] sm:text-[25px] md:text-[25px] lg:text-[28px] xl:text-[30px] Dosxl:text-[45px] z-50 uppercase font-black text-white font-orbion'>
          {t('experience_title')}
          </span>
          <span className='font-normal text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] xl:text-[18px] Dosxl:text-[18px] z-50 text-[#BDBDBD] text-center w-[250px] md:w-full font-sans mb-8'>
            {t('experience_brief')}
          </span>
        </motion.div>

        {/* Advantage 2: Approach */}
        <motion.div
          className='flex flex-col justify-center items-center w-1/4'
          variants={fadeInUp}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="Dosxl:size-20 xl:size-16 size-14 mt-4 text-[#3b82f6]">
            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
          </svg>
          <span className='text-[20px] sm:text-[25px] md:text-[25px] lg:text-[28px] xl:text-[30px] Dosxl:text-[45px] z-50 uppercase font-black text-white font-orbion'>
            { t('approach')}
          </span>
          <span className='font-normal text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] z-50 text-[#BDBDBD] text-center w-[250px] md:w-5/6 font-sans mb-8'>
            {t('approach_brief')}
          </span>
        </motion.div>

        {/* Advantage 3: Technologies */}
        <motion.div
          className='flex flex-col justify-center items-center w-1/4'
          variants={fadeInUp}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="Dosxl:size-20 xl:size-16 size-14 mt-4 text-[#3b82f6]">
            <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
          <span className='text-[20px] sm:text-[25px] md:text-[25px] lg:text-[28px] xl:text-[30px] Dosxl:text-[45px] z-50 uppercase font-black text-white font-orbion'>
            { t('tech_stack')}
          </span>
          <span className='font-normal text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] z-50 text-[#BDBDBD] text-center w-[250px] md:w-5/6 font-sans mb-8'>
            {t('tech_stack_brief')}
          </span>
        </motion.div>

        {/* Advantage 4: Reliability */}
        <motion.div
          className='flex flex-col justify-center items-center w-1/4'
          variants={fadeInUp}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="Dosxl:size-20 xl:size-16 size-14 mt-4 text-[#3b82f6]">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
          <span className='text-[20px] sm:text-[25px] md:text-[25px] lg:text-[28px] xl:text-[30px] Dosxl:text-[45px] z-50 uppercase font-black text-white font-orbion'>
            {t('reliability')}
          </span>
          <span className='font-normal text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] z-50 text-[#BDBDBD] text-center w-[275px] md:w-4/6 font-sans mb-8'>
            {t('reliability_brief')}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Proces;