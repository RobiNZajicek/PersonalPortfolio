'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './KontaktForm.css';
import { toast, Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const KontaktForm = () => {
  const { t } = useTranslation();
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // const result = await emailjs.sendForm(...);
      console.log('SUCCESS');
      toast.success(t("contact_success"), {
        duration: 3000,
        position: 'top-center',
        icon: '✅',
        style: {
          background: '#1A1A1A',
          color: '#ffffff',
          border: '1px solid #4A4A4A',
          fontWeight: 'bold',
        },
      });
      form.current.reset();
    } catch (error) {
      console.error('FAILED:', error);
      toast.error(t("contact_fail"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: <FaPhoneAlt />, title: t('contact_phone'), text: '+420 604 752 987' },
    { icon: <FaEnvelope />, title: t('contact_email'), text: 'zajicekrobin3@gmail.com' },
    { icon: <FaMapMarkerAlt />, title: t('contact_address'), text: 'Thomasova 229/6' }
  ];

  return (
    <motion.div className='relative flex justify-center flex-col px-[1%] xl:px-[7%] Dosxl:px-[15%] contact'>
      <Toaster position="top-center" />
      <div className='KonBlurosss'></div>

      <motion.h1 className='text-center font-orbion font-black text-primary text-[22px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px] Dosxl:text-[50px] glow-text mt-20'>
        {t('contact_heading')}
      </motion.h1>

      <motion.div className='flex flex-col items-center md:flex-row text-white py-16 w-full rounded-lg justify-center font-sans gap-0 max-w-[90%] mx-auto'>
        {/* Form */}
        <motion.div className='w-full md:w-3/5 p-2 flex flex-col flex-1'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col flex-grow'>
            <input
              type='text'
              name='user_name'
              placeholder={t('your_name_placeholder')}
              className='w-full p-4 bg-[#0b142f] rounded-xl text-white placeholder-gray-400 h-16 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg'
              required
            />
            <input
              type='email'
              name='user_email'
              placeholder={t('your_email_placeholder')}
              className='w-full p-4 bg-[#0b142f] rounded-xl text-white placeholder-gray-400 h-16 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg'
              required
            />
            <textarea
              name='message'
              placeholder={t('your_message_placeholder')}
              rows='6'
              className='w-full p-4 bg-[#0b142f] rounded-xl text-white placeholder-gray-400 h-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg flex-grow'
              required
            ></textarea>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-blue-500 text-white py-4 rounded-xl text-xl font-bold opacity-90 hover:opacity-100 transition-all disabled:opacity-50'
            >
              {isSubmitting ? t('sending_button') : t('send_button')}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div className='w-full md:w-2/5 p-2 flex flex-col gap-4 justify-center flex-1'>
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className='bg-[#0b142f] p-6 rounded-xl flex items-center gap-4 w-full'
            >
              <div className='shrink-0 text-blue-500 text-[20px] md:text-[24px]'>
                {item.icon}
              </div>
              <div className='min-w-0 flex-grow'>
                <p className='text-gray-400 text-lg'>{item.title}</p>
                <p className='text-white font-bold text-[14px] sm:text-[16px] md:text-[18px] break-words'>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default KontaktForm;
