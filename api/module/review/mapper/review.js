const Review = require("../entity/review");

function userDataToEntity(review) {
  const {
    id,
    author_name,
    movie_title,
    movie_review,
    rating,
    created_at,
  } = review;

  return new Review({
    id,
    author_name,
    movie_title,
    movie_review,
    rating,
    created_at,
  });
}
function databaseToEntity(review) {
  return new Review(review.toJSON());
}

module.exports = { userDataToEntity, databaseToEntity };
