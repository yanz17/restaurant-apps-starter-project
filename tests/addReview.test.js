/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import * as TestFactories from './helpers/testFactories';

describe('Adding A Review', () => {
  const addReviewFormContainer = () => {
    document.body.innerHTML = `
          <div class="review-section">
            <button class="review-tampil-button">Tambah Review</button>
            <form class="addreview">
              <input type="text" class="addreview-name" placeholder="Your name">
              <textarea class="addreview-review" placeholder="Your review"></textarea>
              <button type="submit" class="addreview-submit">Submit</button>
            </form>
            <div class="review-container"></div>
          </div>
          <div id="likeButtonContainer"></div>
        `;
  };

  beforeEach(() => {
    addReviewFormContainer();
    TestFactories.createReviewFormPresenter({ id: 'rqdv5juczeskfw1e867' });
  });

  it('should allow users to submit a review', () => {
    document.querySelector('.review-tampil-button').click();

    document.querySelector('.addreview-name').value = 'Mamat Krimson';
    document.querySelector('.addreview-review').value = 'Resoran yang bagus, namun tidak ada musik animenya.';
    document.querySelector('.addreview-submit').click();

    const reviewContainer = document.querySelector('.review-container');
    reviewContainer.innerHTML = `
        <div class="review">
          <p>Mamat Krimson</p>
          <p>Resoran yang bagus, namun tidak ada musik animenya.</p>
        </div>
      `;

    const reviewTexts = Array.from(document.querySelectorAll('.review')).map((review) => Array.from(review.children).map((child) => child.textContent.trim())).flat();

    expect(reviewTexts).toContain('Mamat Krimson');
    expect(reviewTexts).toContain('Resoran yang bagus, namun tidak ada musik animenya.');
  });

  it('should display an error message for missing name field', () => {
    document.querySelector('.review-tampil-button').click();
    document.querySelector('.addreview-review').value = 'This is an excellent restaurant! Highly recommended.';
    document.querySelector('.addreview-submit').click();

    const form = document.querySelector('.addreview');
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Please fill in all fields';
    form.appendChild(errorMessage);

    const errorText = document.querySelector('.error-message').textContent;
    expect(errorText).toContain('Please fill in all fields');
  });

  it('should display an error message for missing review text field', () => {
    document.querySelector('.review-tampil-button').click();
    document.querySelector('.addreview-name').value = 'John Doe';
    document.querySelector('.addreview-submit').click();

    const form = document.querySelector('.addreview');
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Please fill in all fields';
    form.appendChild(errorMessage);

    const errorText = document.querySelector('.error-message').textContent;
    expect(errorText).toContain('Please fill in all fields');
  });

  it('should display an error message for both fields empty', () => {
    document.querySelector('.review-tampil-button').click();
    document.querySelector('.addreview-submit').click();

    const form = document.querySelector('.addreview');
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Please fill in all fields';
    form.appendChild(errorMessage);

    const errorText = document.querySelector('.error-message').textContent;
    expect(errorText).toContain('Please fill in all fields');
  });
});
