import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-media-query/iron-media-query.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
        <iron-media-query query="(max-width: 600px)">
            .catalog-container{
                background-color: whitesmoke;
                height: auto;
                transition: .3s ease;
            }
            .catalog-container img{
                margin-top: -1.55rem;
                width: 100%;
                height: 250px;
                object-fit: cover;
                filter: grayscale(0%);
                -webkit-filter: grayscale(0%);
            }
            .picture{
                display: flex;
                gap: 0;
                flex-flow: column;
                justify-content: center;
                transition: .3s ease;
            }
            .description{
                overflow: none;
                text-overflow: none;
                max-height: 1000px;
                transition: .3s ease;
            }
            .text{
                margin: 0px 0.5rem;
                text-align: justify;
                font-family: 'Poppins', sans-serif;
            }
            .text .rating{
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
                font-size: smaller;
            }
            .text .name{
                margin-top: 0;
                margin-bottom: 1rem;
                font-size: 1.25rem;
            }
            .action{
                display: none;
            }
            .view-more{
                display: none;
            }
        </iron-media-query>

        <iron-media-query query="(min-width: 601px)">
            
        </iron-media-query>

        <iron-media-query query="(min-width: 1024px)">
            .view-more{
                position: relative;
                background-color: rgb(60,60,60, 0.6);
                border: 0px;
                padding: 0rem 0rem 3px 0rem;
                font-weight: bolder;
                font-size: 20pt;
                color: whitesmoke;
                transition: .3s ease;
            }

            .catalog-container.active{
                z-index: 10005;
                position: fixed;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: auto;
                img{
                filter: grayscale(0%);
                -webkit-filter: grayscale(0%);
                transition: .3s ease;
                }
                .description{
                overflow: none;
                text-overflow: none;
                max-height: 1000px;
                transition: .3s ease;
                }
                .action{
                display: none;
                }
                .view-more{
                display: none;
                }
                transition: .3s ease;
            }

            .catalog-container:hover{
                img{
                filter: grayscale(0%);
                }
            }
        </iron-media-query> 
    `;
  }
}
customElements.define('sample-element', SampleElement);