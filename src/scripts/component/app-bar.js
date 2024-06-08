class appBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.innerHTML = `
            <nav>
                <div class="nav-logo">
                    <img class="nav-logo-img" src="/images/logo/cat-logo.png" alt="Logo RestCat">
                    <h1 class="nav-logo-title">RestCat</h1>
                </div>
                <div class="nav-menu">
                    <ul>
                        <li class="nav-menu-home"><a href="#/home">Home</a></li>
                        <li class="nav-menu-favorite"><a href="#/favorite">Favorite</a></li>
                        <li class="nav-menu-about"><a href="https://www.instagram.com/mydwianto/">About Us</a></li>
                    </ul>
                </div>
                <button class="nav-ham">
                    <img class="nav-ham-icon" src="/images/icon/bars-solid.png" alt="Hamburger Icon">
                </button>
            </nav>
        `;
    }
}

customElements.define("app-bar", appBar);
