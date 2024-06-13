/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit.js';

const createRestaurantDetailTemplate = (restaurant) => {
  const categoriesArray = restaurant.categories;
  const foodsArray = restaurant.menus.foods;
  const foodsImplement = foodsArray.map((foods) => `<li><p>${foods.name}</p></li>`);

  const drinksArray = restaurant.menus.drinks;
  const drinksImplement = drinksArray.map((drinks) => `<li><p>${drinks.name}</p></li>`);

  const reviewsArray = restaurant.customerReviews;
  const reviewsImplement = reviewsArray.map((reviews) => `
        <div class="review-container-item">
            <p class="review-container-review">"${reviews.review}"</p>
            <p class="review-container-bottom">oleh ${reviews.name} | ${reviews.date}</p>
        </div>
    `);

  return `
        <div class="content-container">
            <img class="content-container-kiri image" src="${`${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}`}" alt="${restaurant.name}" />
            <div class="content-container-kanan">
                <h2 class="name">${restaurant.name}</h2>
                <div id="likeButtonContainer"></div>
                <div class="address">
                    <p>${restaurant.city}, ${restaurant.address}</p>
                </div>
                <div class="description">
                    <hr>
                    <h3>Deskripsi</h3>
                    <p>${restaurant.description}</p>
                </div>
                <div class="categories">
                    <hr>
                    <h3>Kategori</h3>
                    <p class="categories-name">${categoriesArray.map((category) => `<span>${category.name}</span>`).join(', ')}</p>
                </div>
                <div class="rating">
                    <hr>
                    <h3>Rating</h3>
                    <p>${restaurant.rating} / 5</p>
                </div>
                <div class="menus">
                    <hr>
                    <div class="menus-title">
                        <h3>Daftar Menu</h3>
                        <p class="menus-title-plus">+</p>
                    </div>
                    <div class="menus-container">
                        <div class="menus-foods">
                            <p class="menus-foods-subtitle">Makanan</p>
                            <ul class="menus-foods-list">${foodsImplement.join('')}</ul>
                        </div>
                        <div class="menus-drinks">
                            <p class="menus-drinks-subtitle">Minuman</p>
                            <ul class="menus-drinks-list">${drinksImplement.join('')}</ul>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
        <div class="review">
            <h3>Review</h3>
            <div class="review-tampil">
                <button class="review-tampil-button">Tambah Review</button>        
            </div>
            <form class="addreview">
                <input type="text" class="addreview-name" placeholder="Masukan nama anda">
                <textarea type="text" class="addreview-review" placeholder="Masukan ulasan anda tentang restoran ini"></textarea>
                <button typr="submit" class="addreview-submit">Submit</button>
            </form>
            <div class="review-container">
                ${reviewsImplement.join('')}        
            </div>
        </div>
    `;
};

const createRestaurantItemTemplate = (restaurants) => `
    <div class="catalog" id="${restaurants.id}">
        <button class="catalog-link"><a href="/#/detail/${restaurants.id}">Selengkapnya</a></button>
        <img class="catalog-image" loading="lazy" src="${`${CONFIG.BASE_IMAGE_URL}large/${restaurants.pictureId}`}" alt="${restaurants.name}" />
        <div class="catalog-text">
            <h4 class="catalog-text-name">
                <a href="/#/detail/${restaurants.id}" style="text-decoration:none;color:black;">${restaurants.name}</a>
            </h4>
            <p class="catalog-text-city">${restaurants.city} | ${restaurants.rating} <span class="bintang">★</span></p>
            <p class="catalog-text-description">${restaurants.description}</p>
            <div class="catalog-text-transition"></div>
        </div>
        <button class="catalog-link-mobile"><a href="/#/detail/${restaurants.id}">Selengkapnya</a></button>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate, 
  createRestaurantItemTemplate, 
  createLikeButtonTemplate, 
  createLikedButtonTemplate,
};