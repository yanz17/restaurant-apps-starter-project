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
  const App = await import(/* webpackChunkName: "app-view" */ './views/app.js');

  // eslint-disable-next-line new-cap
  const app = new App.default({
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

  const debounce = (await import(/* webpackChunkName: "lodash" */ 'lodash.debounce')).default;
  const logHash = debounce(() => {
    console.log('Current hash:', window.location.hash);
  }, 300);

  window.addEventListener('hashchange', logHash);
}

async function initSW() {
  const swRegister = await import(/* webpackChunkName: "sw-register" */ './utils/sw-register.js');
  swRegister.default();
}

initApp();
