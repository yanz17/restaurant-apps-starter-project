/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-relative-packages */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/desktop.css';
import '../styles/tablet.css';
import '../styles/mobile.css';

// Importing Component
import './component/footer.js';
import './component/app-bar.js';
import './component/offscreen-menu.js';
import './component/loader.js';

console.log('Hello Coders! :)');

async function initApp() {
  const { default: App } = await import('./views/app.js');

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
    // eslint-disable-next-line no-use-before-define
    initSW();
  });

  // eslint-disable-next-line no-shadow
  const { default: _ } = await import('lodash.debounce');
  const logHash = _.debounce(() => {
    console.log('Current hash:', window.location.hash);
  }, 300);

  window.addEventListener('hashchange', logHash);
}

async function initSW() {
  const { default: swRegister } = await import('./utils/sw-register.js');
  swRegister();
}

initApp();
