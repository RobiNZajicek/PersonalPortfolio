

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/page';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <section>
       <Router>
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      </Router>
    </section>
  );
};

export default App;
