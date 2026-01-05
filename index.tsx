import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { applyBrowserFallbacks } from './src/utils/browserCompat';

console.log('🚀 App starting...');

// Apply browser-specific fixes
applyBrowserFallbacks();

const rootElement = document.getElementById('root');
console.log('📍 Root element:', rootElement);

if (!rootElement) {
  console.error('❌ Root element not found');
  throw new Error("Could not find root element");
}

const root = ReactDOM.createRoot(rootElement);
console.log('✅ React root created');

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

console.log('✅ App rendered');
