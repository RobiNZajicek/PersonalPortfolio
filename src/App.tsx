
import { HeaderMegaMenu } from './components/HeaderMegaMenu/HeaderMegaMenu';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Works';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuration file

const App = () => {
  return (
    <section>
      <I18nextProvider i18n={i18n}>
        <HeaderMegaMenu />
        <Home />
        <About />
        <Experience />
        <div className='container'>
          <Skills />
        </div>
        <Projects />
        <div className='relative z-0 bg-primary div-fid'></div>
        <div className='relative z-0 bg-primary div-fid'>
          <Contact />
        </div>
      </I18nextProvider>
    </section>
  );
};

export default App;
