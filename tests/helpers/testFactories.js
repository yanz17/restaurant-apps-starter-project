/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};
  // eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
