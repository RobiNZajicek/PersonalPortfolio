import React from "react";
import { motion } from "framer-motion";
import './Projects.css'
import { styles } from "../../styles";
import GitHub from '../../assets/github.png'
import { SectionWrapper } from "../../hoc";
import { frontEnd } from "../../constants";
import { BackEnd } from "../../constants";
import { FullStack } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import doc from '../../assets/docs.png';
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  dokumentation
}) => {
  const variants = fadeIn("up", "spring", index * 0.5, 0.75);
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger animation once
    rootMargin: "-200px 0px", // Start animation 300px above the viewport
  });
  
  return (
    <motion.div
      key={`project-${name}`}
      className="sfs"
      id="projects"
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      ref={ref}
    >
      <section
        className='bg-tertiary p-5 rounded-2xl   cardes'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-48 object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={GitHub}
                alt='source code'
                className='w-32 h-10  object-contain bg-black rounded-full '
              />
            </div>
          </div>
        </div>

        <div className=' div-cardss'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p
              key={`${name}-${tag.name}-${index}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div>
          <a  href={dokumentation} download=''>
          <button className="mt-6   p-2 rounded-md documentation-btn flex flex-row">Documentation <img className="w-5 h-5 ml-2 " src={doc} alt="" /></button>
          </a>  
        </div>
      </section>
    </motion.div>
  );
};

const Works = () => {
  const [count, setCount] = React.useState(1);
  const [animationKey, setAnimationKey] = React.useState(0);

  let projects = [];
  switch (count) {
    case 1:
      projects = frontEnd;
      break;
    case 2:
      projects = BackEnd;
      break;
    case 3:
      projects = FullStack;
      break;
    default:
      projects = frontEnd;
  }

  const handleButtonClick = (value) => {
    setCount(value);
    setAnimationKey(prevKey => prevKey + 1); // Increment key to trigger re-mounting of ProjectCard
  };
  const { t, i18n } = useTranslation();
  //service_xkosvep
  return (
    <section className="projectosss ">
      <motion.div key={animationKey} className="tfs" variants={textVariant}>
        <p className={`${styles.sectionSubText}`}>{t("works")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("Projectsos")}</h2>
      </motion.div>

      <div className=' flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] font-semibold  max-w-3xl leading-[30px] w-3/5'
        >
          {t("text_pro")}
        </motion.p>
      </div>

      <div className="flex flex-row mt-16 gap-4">
        <button className="tch-btn p-2 rounded-md" onClick={() => handleButtonClick(1)}>Front-End</button>
        <button className="tch-btn p-2 rounded-md" onClick={() => handleButtonClick(2)}>Back-End</button>
        <button className="tch-btn p-2 rounded-md" onClick={() => handleButtonClick(3)}>Full Stack</button>
      </div>

      <div className='mt-20 flex flex-wrap gap-4 div-cards'>
        {projects.map((project, index) => (
          <ProjectCard  key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
