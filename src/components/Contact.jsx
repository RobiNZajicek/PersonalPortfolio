import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import Contactos from '../assets/Contact.json'
import { styles } from "../styles";
import Lottie from 'lottie-react'
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useTranslation } from 'react-i18next';
import tick2 from '../assets/tick2.svg'

const Contact = () => {
  const { t, i18n } = useTranslation();
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showExitAnimation, setShowExitAnimation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xkosvep', 'template_rlyq2lg', formRef.current, {
        publicKey: 'FjHR19_UwmBrW35Gr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Reset form fields by setting input values to empty string
          if (formRef.current) {
            formRef.current.user_name.value = '';
            formRef.current.user_email.value = '';
            formRef.current.user_description.value = '';
          }
          setShowPopup(true); // Show the popup on success
          setTimeout(() => {
            setShowExitAnimation(true); // Trigger exit animation after delay
            setTimeout(() => {
              setShowPopup(false); // Hide the popup after exit animation
              setShowExitAnimation(false); // Reset exit animation state
            }, 500); // Adjust this duration to match exit animation duration
          }, 3000); // Adjust this to match your desired duration
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      x: 200,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>{t("get_in_touch")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact_heading")}</h3>

        <form ref={formRef} onSubmit={sendEmail} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("your_name")}</span>
            <input
              type='text'
              name='user_name'
              placeholder={t("your_name_placeholder")}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("your_email")}</span>
            <input
              type='email'
              name='user_email'
              placeholder={t("your_email_placeholder")}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("your_message")}</span>
            <textarea
              rows={7}
              name="user_description"
              placeholder={t("your_message_placeholder")}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 rounded-md outline-none w-24 h-9 bg-purple-700 text-white font-bold shadow-md flex items-center justify-center shadow-primary btn'>
            {t("send_button")}
          </button>

          {showPopup && (
            <motion.div
              key="popup" // Add key for proper animation on unmount/remount
              className="popup"
              id="popup"
              variants={popupVariants}
              initial="hidden"
              animate={showExitAnimation ? "exit" : "visible"} // Trigger exit animation if showExitAnimation is true
              onAnimationComplete={() => {
                if (showExitAnimation) {
                  setShowPopup(false); // Hide the popup after exit animation
                  setShowExitAnimation(false); // Reset exit animation state
                }
              }}
            >
              <img src={tick2} alt="" />
              <h2>Thank you!</h2>
            </motion.div>
          )}
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <Lottie className='contact-img mr-12' animationData={Contactos}/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
