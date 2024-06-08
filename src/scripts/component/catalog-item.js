class CatalogItem extends HTMLElement {
    constructor() {
      super();
  
      this.catalog = {
        id: null,
        name: null,
        title: "NEED_TITLE",
        description: "NEED_DESCRIPTION",
        pictureId: null,
        city: null,
        rating: 0,
      };
      this._style = document.createElement("sample-element");
    }
  
    setCatalog(value) {
      this.catalog["id"] = value.id;
      this.catalog["name"] = value.name;
      this.catalog["title"] = value.title;
      this.catalog["description"] = value.description;
      this.catalog["pictureId"] = value.pictureId;
      this.catalog["city"] = value.city;
      this.catalog["rating"] = value.rating;
  
      this.render();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.setAttribute("data-id", this.catalog.id);
  
      this.innerHTML = `
              <div class="catalog-container">
                <div class="picture">
                    <span class="city" name="Kota"><p>${this.catalog.city}</p></span>
                    <img src="${this.catalog.pictureId}" alt="${this.catalog.name}">
                </div>
                <div class="text">
                    <p class="rating">Rating: ${this.catalog.rating}</p>
                    <h4 class="name">${this.catalog.name}</h4>
                    <p class="description">${this.catalog.description}</p>
                </div>
                <div class="action">
                    <div class="gradient"></div>
                    <button class="view-more">...</button>  
                </div>
              </div>
          `;

        const catalogContainer = this.querySelector('.catalog-container');
        catalogContainer.addEventListener('click', ()=>{
          catalogContainer.classList.toggle('active');
        })
    }
  }
  
  customElements.define("catalog-item", CatalogItem);
  