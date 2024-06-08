import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import { createRestaurantItemTemplate } from "../templates/template-creator";
import '../../component/loader.js';

const Home = {
    async render() {
        return `
            <pre-loader></pre-loader>
            <div class="jumbotron">
                <div class="jumbotron-text">
                    <h2 class="jumbotron-text-title">RestCat</h2>
                    <p class="jumbotron-text-subtitle">Restaurant Catalog</p>
                </div>
            </div>
            <div class="intro">
                <div class="intro-logo">
                    <img class="intro-logo-img" src="/images/logo/cat-logo.png" alt="Logo RestCat">
                </div>
                <div class="intro-text">
                    <h3 class="intro-text-title">Apa itu RestCat?</h3>
                    <div class="intro-text-description">
                        <p>RestCat adalah sebuah layanan yang menyediakan katalog restoran dari berbagai kota yang ada di Indonesia.</p>
                        <p>Lalu apa hubungannya dengan kucing? Tidak ada</p>
                    </div>
                </div>
            </div>
            <h4 id="jelajahi-restoran">Jelajahi Restoran</h4>
            <form class="search">
                <input type="text" class="search-input" placeholder="Masukan nama restoran...">
                <button type="submit" class="search-submit">Cari</button>
            </form>
            <div class="restaurant-container" id="main"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const restaurant = await RestaurantSource.getListRestaurant();
        const restaurantCatalog = document.querySelector('.restaurant-container');
        restaurant.forEach((restaurants) => {
            restaurantCatalog.innerHTML += createRestaurantItemTemplate(restaurants);
        });

        const form = document.querySelector('.search');
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const searchQuery = document.querySelector('.search-input').value;
            
            RestaurantSource.searchRestaurant(searchQuery)
            .then((searchResults) => {
                // Clear the previous search results
                restaurantCatalog.innerHTML = '';

                // Render the new search results
                searchResults.forEach((restaurant) => {
                    restaurantCatalog.innerHTML += createRestaurantItemTemplate(restaurant);
                });
            })
            .catch((error) => {
                console.error('Error searching restaurants:', error);
                // Handle the error appropriately
            });
        })
    },
};

export default Home;