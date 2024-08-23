import React from 'react';

import WebApp from '@twa-dev/sdk';

import { App } from './App.tsx';

import ReactDOM from 'react-dom/client';

WebApp.ready();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
