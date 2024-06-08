class offScreenMenu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="offscreen-menu">
                <button class="offscreen-menu-close">
                    <svg class="fa-solid fa-xmark fa-lg" style="color: white"></svg>
                </button>
                <ul>
                    <li class="offscreen-menu-home">
                        <a href="/index.html">Home</a>
                    </li>
                    <li class="offscreen-menu-favorite">
                        <a href="#">Favorite</a>
                    </li>
                    <li class="offscreen-menu-about">
                        <a href="https://www.instagram.com/mydwianto/">About Us</a>
                    </li>
                </ul>
            </div>
        `;

        const navHam = document.querySelector('.nav-ham');
        const offScreen = document.querySelector('.offscreen-menu');
        navHam.addEventListener('click', () => {
            offScreen.classList.toggle('active');
        });

        const closeMenu = document.querySelector('.offscreen-menu-close');
        closeMenu.addEventListener('click', () => {
            offScreen.classList.toggle('active');
        })
    }
}

customElements.define("offscreen-menu", offScreenMenu);