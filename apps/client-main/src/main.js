import App from '@root/Root/App/App.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
