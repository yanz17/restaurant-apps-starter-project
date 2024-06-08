import API_ENDPOINT from '../globals/api-endpoint';

const showResponseMessage = (message = "Check your internet connection") => {
  alert(message);
};

class RestaurantSource {
    static async getListRestaurant() {
        try {
          const response = await fetch(API_ENDPOINT.GET_LIST);
          const responseJson = await response.json();
          if (!response.ok) {
            throw new Error(responseJson.message || 'Failed to fetch restaurant list');
          }
          return responseJson.restaurants;
        } catch (error) {
          showResponseMessage('Error fetching restaurant list:', error);
          throw error;
        }
    }
 
    static async searchRestaurant(query) {
        try {
          const response = await fetch(`${API_ENDPOINT.SEARCH}${encodeURIComponent(query)}`);
          const responseJson = await response.json();
          if (!response.ok) {
            throw new Error(responseJson.message || 'Failed to search restaurants');
          }

          return responseJson.restaurants;
        } catch (error) {
          showResponseMessage('Error searching restaurants:', error);
          throw error;
        }
    }

    static async addReview(review) {
        try {
          const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
          });
          const responseJson = await response.json();
          if (!response.ok) {
            throw new Error(responseJson.message || 'Failed to add review');
          }
          window.location.reload();
          return responseJson.result;
        } catch (error) {
          showResponseMessage('Error adding review:', error);
          throw error;
        }
    }
 
    static async detailRestaurant(id) {
      try {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        console.log(id);
        const responseJson = await response.json();
        if (!response.ok) {
          throw new Error(responseJson.message || 'Failed to fetch restaurant details');
        }
        return responseJson.restaurant;
      } catch (error) {
        showResponseMessage('Error fetching restaurant details:', error);
        throw error;
      }
  }
}
 
export default RestaurantSource;