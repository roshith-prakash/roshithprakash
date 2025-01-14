import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { DarkModeProvider } from './context/DarkModeContext';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

