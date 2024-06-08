/* eslint-disable no-unused-vars */
class footerApp extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
          <style>
              .footer-container{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: space-between; 
                  gap: 0;
                  height: 50px;
                  background-color: black;
                  color: whitesmoke;
                  padding: 1rem;
                  margin-top: 1rem;
              }
  
              p{
                  font-family: 'Poppins', sans-serif;
                  text-align: center;
                  margin: 5px;
                  font-size: 0.75rem;
              }
          </style>
  
          <div class="footer-container">
              <p>${this.quote}</p>
              <p>${this.copyright}</p>
          </div>
      `;
  }

  get quote() {
    return this.getAttribute('quote');
  }

  get copyright() {
    return this.getAttribute('copyright');
  }

  static get observedAttributes() {
    return ['quote', 'copyright'];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === 'quote' && prop === 'copyright') {
      this.render();
    }
  }
}

customElements.define('footer-app', footerApp);
