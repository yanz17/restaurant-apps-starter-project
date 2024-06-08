class CatalogList extends HTMLElement {
    constructor() {
      super();
  
      this.catalogList = [];
  
      this._style = document.createElement("style");
    }
  
    setCatalogList(value) {
      this.catalogList = value;
      this.render();
    }

    connectedCallback() {
      this.render();
    }
  
    updateStyle() {
      this._style.textContent = `
          catalog-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            justify-items: center;
            gap: 1rem;
            margin: 1rem 1rem 0rem 1rem;
          }
        `;
    }
  
    render() {
      this.updateStyle();
  
      const catalogElements = this.catalogList.map((item) => {
        const catalog = document.createElement("catalog-item");
        catalog.setCatalog(item);
        return catalog;
      });
  
      this.innerHTML = "";
      this.append(this._style, ...catalogElements);
    }
  }
  
  customElements.define("catalog-list", CatalogList);
  