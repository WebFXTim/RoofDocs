import { polyfill } from 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { unregister } from './serviceWorker.js';
polyfill();

// Force Reload of App
unregister();

ReactDOM.render(<App />, document.getElementById('root'));


