import Review from "../entity/review";

export default function reviewMapper(review) {
  const { id, authorName, movieTitle, movieReview, rating } = review;
  return new Review({
    id,
    authorName,
    movieTitle,
    movieReview,
    rating,
  });
}
