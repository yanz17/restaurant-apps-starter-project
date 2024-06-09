/* eslint-disable no-underscore-dangle */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiatior';

class App {
  constructor({
    button, drawer, content, closer,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._closer = closer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      closer: this._closer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#maincontent');

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.focus();
    });

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
