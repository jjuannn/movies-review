class Review {
  constructor({
    id,
    author_name,
    movie_title,
    movie_review,
    rating,
    created_at,
  }) {
    this.id = id;
    this.author_name = author_name;
    this.movie_title = movie_title;
    this.movie_review = movie_review;
    this.rating = rating;
    this.created_at = created_at;
  }
}

module.exports = Review;
