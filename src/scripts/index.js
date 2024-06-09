/* eslint-disable import/no-relative-packages */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/desktop.css';
import '../styles/tablet.css';
import '../styles/mobile.css';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js';

import App from './views/app.js';
import swRegister from './utils/sw-register.js';

// Importing Component
import './component/footer.js';
import './component/app-bar.js';
import './component/offscreen-menu.js';
import './component/loader.js';

console.log('Hello Coders! :)');

const app = new App({
  button: document.querySelector('.nav-ham'),
  drawer: document.querySelector('.offscreen-menu'),
  content: document.querySelector('#maincontent'),
  closer: document.querySelector('.offscreen-menu-close'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
