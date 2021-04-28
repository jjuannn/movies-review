import React, { useEffect, useState } from "react";
import Loading from "../loading/loading";
import Button from "../buttons/button";
import useForm from "../../hooks/useForm";
import { Redirect } from "react-router-dom";
import styled from "@emotion/styled";

const Input = styled.input`
  line-height: 2rem;
  padding: 5px;
  border: 2px solid var(--purple);
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: auto;
`;

const Label = styled.label`
  margin: 10px 0;
`;

export default function AddForm() {
  const [redirect, setRedirect] = useState(false);
  const {
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
  } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = { authorName, movieTitle, movieReview, rating };
    createReview(values);
  };

  useEffect(() => {
    if (success) {
      setRedirect(true);
    }
  }, [success]);

  if (sending) {
    return <Loading />;
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>Your name (will be displayed in the review): </Label>
        <Input
          name="author_name"
          required
          value={authorName}
          onChange={changeAuthorName}
        ></Input>
        <Label>Movie Title</Label>
        <Input
          name="movie_title"
          required
          value={movieTitle}
          onChange={changeMovieTitle}
        ></Input>
        <Label>Your review</Label>
        <Input
          name="movie_review"
          required
          value={movieReview}
          onChange={changeMovieReview}
        ></Input>
        <Label>Rating</Label>
        <Input
          // validar que los campos sean obligatorios y agrgegar un maximo para el rating
          name="rating"
          value={rating}
          max="10"
          min="0"
          required
          onChange={changeRating}
          type="number"
        ></Input>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        {redirect && <Redirect to="/" />}
        <Button withMargin margin="10px 0px" text="submit" />
      </Form>
    </>
  );
}
