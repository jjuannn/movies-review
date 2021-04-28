export default class Review {
  constructor({ id, authorName, movieTitle, movieReview, rating }) {
    this.id = id;
    this.author_name = authorName;
    this.movie_title = movieTitle;
    this.movie_review = movieReview;
    this.rating = rating;
  }
}
