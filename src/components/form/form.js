import React, { useRef } from "react";
import Button from "../buttons/button";
import useForm from "../../hooks/useForm";
import styled from "@emotion/styled";

const Input = styled.input`
  line-height: 2rem;
  padding: 5px;
  border: 2px solid var(--purple);
  border-radius: 5px;
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
  const formRef = useRef(null);
  const {
    authorName,
    movieTitle,
    movieReview,
    rating,
    changeAuthorName,
    changeMovieTitle,
    changeMovieReview,
    changeRating,
  } = useForm();

  const handleSubmit = () => {
    const values = { authorName, movieTitle, movieReview, rating };
    console.log(values);
  };

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Label>Your name (will be displayed in the review): </Label>
        <Input
          name="author_name"
          value={authorName}
          onChange={changeAuthorName}
        ></Input>
        <Label>Movie Title</Label>
        <Input
          name="movie_title"
          value={movieTitle}
          onChange={changeMovieTitle}
        ></Input>
        <Label>Your review</Label>
        <Input
          name="movie_review"
          value={movieReview}
          onChange={changeMovieReview}
        ></Input>
        <Label>Rating</Label>
        <Input
          name="rating"
          value={rating}
          onChange={changeRating}
          type="number"
        ></Input>
        <Button withMargin margin="10px 0px" text="submit" />
      </Form>
    </>
  );
}
