import 'reflect-metadata';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './view/styles/style.css';
import './view/styles/satoshi.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
