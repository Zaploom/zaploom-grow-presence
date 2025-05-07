
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
  offset: 120
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
