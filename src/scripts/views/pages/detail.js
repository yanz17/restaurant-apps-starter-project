import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
    async render() {
        return `
            <pre-loader></pre-loader>
            <div class="detail-container"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('.detail-container');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        const menusTitle = document.querySelector('.menus-title');
        const menusContainer = document.querySelector('.menus-container');
        const plus = document.querySelector('.menus-title-plus');
        menusTitle.addEventListener('click', () => {
            menusContainer.classList.toggle('active');
            if (menusContainer.classList.contains('active')) {
                plus.innerHTML = '-';
            } else {
                plus.innerHTML = '+';
            }
        });

        const reviewTampil = document.querySelector('.review-tampil-button');
        const addReviewForm = document.querySelector('.addreview');    
        reviewTampil.addEventListener('click', () => {
            addReviewForm.classList.toggle('active');
            if (addReviewForm.classList.contains('active')) {
                reviewTampil.innerHTML = 'Tutup Review';
            } else {
                reviewTampil.innerHTML = 'Tambah Review';
            }
        });

        addReviewForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = document.querySelector('.addreview-name').value;
            const review = document.querySelector('.addreview-review').value;
            const reviewData = {
                id: restaurant.id,
                name,
                review,
            };

            try {
                await RestaurantSource.addReview(reviewData);
                addReviewForm.reset();
            } catch (error) {
                console.error('Error adding review:', error);
            }
        });

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                pictureId: restaurant.pictureId,
                city: restaurant.city,
                rating: restaurant.rating,
            },
        });
    },
};

export default Detail;