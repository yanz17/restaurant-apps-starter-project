/* eslint-disable no-useless-constructor */
class preLoader extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
            <style>
                .loader{
                    position: fixed;
                    z-index: 99999;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: black;
                    transition: opacity 0.75s, visibility 0.75s; 
                }
                .loader--hidden{
                    opacity: 0;
                    visibility: hidden;
                }
                .loader::after{
                    content: "";
                    width: 75px;
                    height: 75px;
                    border: 15px solid #c3c3c3;
                    border-top-color: white;
                    border-radius: 50%;
                    animation: loading 0.75s ease infinite;
                }
                
                @keyframes loading{
                    from { transform: rotate(0turn) }
                    from { transform: rotate(1turn) }
                }
                
            </style>

            <div class="loader"></div>
        `;

    const loaderContainer = document.querySelector('.loader');
    setTimeout(() => {
      loaderContainer.classList.add('loader--hidden');
    }, 1000);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('pre-loader', preLoader);
