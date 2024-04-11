import React from 'react'
import { HeaderMegaMenu } from './components/HeaderMegaMenu/HeaderMegaMenu'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Works.jsx'
import WorkExperience from './components/WorkExperience/WorkExperience.jsx'
import Experience from './components/Experience/Experience.jsx'
import Line from './components/Line/Line.jsx'
import { CardGradient } from './components/CardGradient/CardGradient.js'
import CardGradientPage from './components/CardGradientPage/CardGradientPage.jsx'
import Feedbacks from './components/Feedbacks.jsx'
import { FooterCentered } from './components/FooterCentered/FooterCentered.js'
import Contact from './components/Contact.jsx'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js'; // Import your i18n configuration file
const App = () => {
  return (
    <section>
      <I18nextProvider i18n={i18n}>
      <HeaderMegaMenu/>
      <Home/>
       <About/>
       {/* <Line/> */}
       <Experience/>
      <div className='container'>
      <Skills/>
      
      
      </div>
      <Projects/>
      <div className='relative z-0 bg-primary div-fid'> 
      {/* <Feedbacks/> */}
      </div>
     
      {/* <CardGradientPage/> */}
      <div className='relative z-0 bg-primary div-fid'> 
      <Contact/>
      </div>
      {/* <FooterCentered/> */}
      </I18nextProvider>
    </section>
  )
}

export default App