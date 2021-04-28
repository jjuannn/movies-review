import { useState } from "react";
import reviewMapper from "../mapper/review";
import useFetch from "./useFetch";

export default function useForm() {
  const [authorName, setAuthorName] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [rating, setRating] = useState("");
  const { success, sending, error, publishReview } = useFetch();

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

  const createReview = (data) => {
    const userValues = reviewMapper(data);
    publishReview(userValues);
  };

  return {
    authorName,
    movieTitle,
    movieReview,
    rating,
    success,
    sending,
    error,
    changeAuthorName,
    changeMovieTitle,
    changeMovieReview,
    changeRating,
    createReview,
  };
}
