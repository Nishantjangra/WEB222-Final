function createRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? '★' : '☆';
    }
    return stars;
  }
  
  function createReviewCard(review) {
    const card = document.createElement('div');
    card.classList.add('review-card');
  
    const name = document.createElement('h2');
    name.textContent = review.name;
    card.appendChild(name);
  
    const date = document.createElement('time');
    date.textContent = new Date(review.date).toLocaleDateString();
    card.appendChild(date);
  
    const rating = document.createElement('p');
    rating.textContent = createRatingStars(review.rating);
    card.appendChild(rating);
  
    const reviewText = document.createElement('p');
    reviewText.textContent = review.review;
    card.appendChild(reviewText);
  
    return card;
  }
  
  function displayReviews() {
    const reviewCards = document.getElementById('review-cards');
    reviewCards.innerHTML = '';
  
    for (const review of window.reviewData) {
      const card = createReviewCard(review);
      reviewCards.appendChild(card);
    }
  }
  
  document.getElementById('review-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const rating = parseInt(document.getElementById('rating').value, 10);
    const review = document.getElementById('review').value;
  
    window.reviewData.push({ name, date, rating, review });
  
    displayReviews();
    event.target.reset();
  });
  
  displayReviews();
  