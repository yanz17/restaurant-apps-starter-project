/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Tidak ada restoran favorit untuk ditampilkan');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran favorit untuk ditampilkan');

  I.amOnPage('/');

  I.seeElement('.catalog-text-name a');
  const firstRestaurant = locate('.catalog-text-name a').first();
  I.waitForVisible(firstRestaurant, 10); // Wait for up to 10 seconds for the element to be visible
  I.waitForEnabled(firstRestaurant, 10);
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalog');
  const likedRestaurantTitle = await I.grabTextFrom('.catalog-text-name a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restoran favorit untuk ditampilkan');

  I.amOnPage('/');

  I.seeElement('.search');

  const searchQuery = 'Melting Pot';
  I.fillField('.search-input', searchQuery);
  I.click('.search-submit');

  I.waitForElement('.restaurant-container', 5);

  const restaurantTitles = await I.grabTextFromAll('.catalog-text-name');

  restaurantTitles.forEach((title) => {
    assert.ok(title.toLowerCase(), searchQuery.toLocaleLowerCase());
  });
});

Scenario('No results found for search query', async ({ I }) => {
  // Enter a search query that doesn't match any restaurants
  I.amOnPage('/');

  const searchQuery = 'invalid query';
  I.fillField('.search-input', searchQuery);

  // Submit the search form
  I.click('.search-submit');

  // Wait for the search results to load
  I.waitForElement('.restaurant-container', 5);

  // Check if the "No restaurants found" message is displayed
  I.seeElement('.no-restaurants-message');
  const noRestaurantsMessage = await I.grabTextFrom('.no-restaurants-message');
  assert.ok(noRestaurantsMessage, 'Tidak ada restoran yang dapat ditampilkan');
});
