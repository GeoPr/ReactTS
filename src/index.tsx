// ================================================================================================================================================================================================================================================================================================================================
'use sctrict';
// ================================================================================================================================================================================================================================================================================================================================
// JS \\
import React from 'react';
import './index.scss';
import { render } from 'react-dom';
import { StateProvider } from './assets/state/state';
import App from './assets/components/App';

render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root'),
);
// JS \\
// ================================================================================================================================================================================================================================================================================================================================
