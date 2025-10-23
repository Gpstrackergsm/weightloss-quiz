import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { initAnalytics, trackPageView } from './utils/analytics.js';

if (typeof window !== 'undefined') {
  initAnalytics();
  trackPageView(window.location.pathname);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
