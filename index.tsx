
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { applyBrowserFallbacks } from './src/utils/browserCompat';

// Apply browser-specific fixes on app startup
applyBrowserFallbacks();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

