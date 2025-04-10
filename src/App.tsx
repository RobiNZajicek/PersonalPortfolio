
import { HeaderMegaMenu } from './components/HeaderMegaMenu/HeaderMegaMenu';
import Home from './components/Home/Home';
import Proces from './components/Proces/Proces';
import Skills from './components/Skills/Skills';;
import Experience from './components/Experience/Experience';
import KontaktForm from './components/KontaktForm/KontaktForm'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuration file
import Treneri from './components/Onas/Treneri/Treneri';

const App = () => {
  return (
    <section>
      <I18nextProvider i18n={i18n}>
        <HeaderMegaMenu />
        <Home />
        <Proces/>
        <Experience />
        {/* <div className='container'>
          <Skills />
        </div> */}
        <Treneri/>
        <div className='relative z-0 bg-primary div-fid'></div>
        
          <KontaktForm/>
        
      </I18nextProvider>
    </section>
  );
};

export default App;
