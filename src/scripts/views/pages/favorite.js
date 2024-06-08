/* eslint-disable no-shadow */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import '../../component/loader';

const Favorite = {
  async render() {
    return `
        <pre-loader></pre-loader>
        <div class="content">
            <div class="jumbotron">
                <div class="jumbotron-text">
                    <h2 class="jumbotron-text-title">RestCat</h2>
                    <p class="jumbotron-text-subtitle">Halaman Favorit</p>
                </div>
            </div>
          <h2 class="content__heading" id="jelajahi-restoran">Daftar Restoran Favorit</h2>
          <div id="restaurant" class="restaurant-container"></div>
        </div>
      `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');

    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
