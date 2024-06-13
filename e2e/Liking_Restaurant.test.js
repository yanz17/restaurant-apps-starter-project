/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.waitForElement('.catalog', 5);
  I.seeElement('.catalog');

  I.see('Tidak ada restoran untuk ditampilkan', '.movie-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.movie-item__not__found');
  // eslint-disable-next-line no-trailing-spaces
  
  I.amOnPage('/#/home');

  pause();

  I.seeElement('.catalog-text-name a');
  const firstRestaurant = locate('.catalog-title-name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalog');
  const likedRestaurantTitle = await I.grabTextFrom('.catalog-text-name a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('searching movies', async ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/#/home');

  I.seeElement('.catalog-text-name a');

  const titles = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.catalog-text-name a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    // eslint-disable-next-line no-await-in-loop
    titles.push(await I.grabTextFrom('.name'));
    I.amOnPage('/#/home');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('.catalog');

  const visibleLikedRestaurant = await I.grabNumberOfVisibleElements('.catalog');
  assert.strictEqual(titles.length, visibleLikedRestaurant);

  const searchQuery = titles[1].substring(1, 3);

  I.fillField('.search-input', searchQuery);
  I.pressKey('Enter');

  // mendapatkan daftar film yang sesuai dengan searchQuery
  const matchingRestaurant = titles.filter((title) => title.indexOf(searchQuery) !== -1);
  const visibleSearchedLikedRestaurant = await I.grabNumberOfVisibleElements('.catalog');

  assert.strictEqual(matchingRestaurant.length, visibleSearchedLikedRestaurant);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < matchingRestaurant.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const visibleTitle = await I.grabTextFrom(locate('.catalog-text-name').at(i + 1));
    assert.strictEqual(matchingRestaurant[i], visibleTitle);
  }
});
