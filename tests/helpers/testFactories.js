/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

const createReviewFormPresenter = async (restaurant) => {
  const reviewTampilButton = document.querySelector('.review-tampil-button');
  const addReviewForm = document.querySelector('.addreview');

  // Click the "Tambah Review" button
  reviewTampilButton.click();

  // Add event listener to the form for submit
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
      // Call the appropriate method to submit the review
      // eslint-disable-next-line no-use-before-define
      await submitReview(reviewData);
      addReviewForm.reset();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  });
};

const submitReview = async (reviewData) => {
  // Implement the logic to submit the review
  // You can mock the API call or call the actual API endpoint
  console.log('Submitting review:', reviewData);
};
  // eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant, createReviewFormPresenter };
