import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import App from './App';
import { MantineProvider } from '@mantine/core';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    
    <App />
    
  </MantineProvider>
);