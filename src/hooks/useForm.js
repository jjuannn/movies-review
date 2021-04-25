import { useState } from "react";

export default function useForm() {
  const [authorName, setAuthorName] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [rating, setRating] = useState("");

  const changeAuthorName = ({ target }) => {
    const { value } = target;
    setAuthorName(value);
  };

  const changeMovieTitle = ({ target }) => {
    const { value } = target;
    setMovieTitle(value);
  };

  const changeMovieReview = ({ target }) => {
    const { value } = target;
    setMovieReview(value);
  };

  const changeRating = ({ target }) => {
    const { value } = target;
    setRating(value);
  };

  return {
    authorName,
    movieTitle,
    movieReview,
    rating,
    changeAuthorName,
    changeMovieTitle,
    changeMovieReview,
    changeRating,
  };
}
