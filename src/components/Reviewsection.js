import React, { useState } from 'react';
import './ReviewSection.css';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    const {  value,name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { ...formData };
    setReviews([...reviews, newReview]);
    setFormData({
      name: '',
      email: '',
      rating: '',
      comment: ''
    });
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <=6; i++) {
      stars.push(
        <span  key={i} className={i <= formData.rating ? 'star filled' : 'star'}
          onClick={() => setFormData({ ...formData, rating: i.toString() })}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="review-section">
      <div className="container">
        <h2>Reviews</h2>
        <div className="reviews-list">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review">
                <h3>{review.name}</h3>
                <p>Email: {review.email}</p>
                <p>Rating: {renderStars()}</p>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
        <div className="add-review">
          <h3>Add Your Review</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Rating:</label>
              <div className="star-rating">{renderStars()}</div>
            </div>
            <div>
              <label>Comment:</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
