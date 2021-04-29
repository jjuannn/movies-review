import React from "react";
import styled from "@emotion/styled";

const StyledReview = styled.div`
  margin: 20px;
  background: #ad8749;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Author = styled.div`
  font-size: 16px;
  padding: 10px;
`;

const MovieReview = styled.div`
  padding: 10px;
  flex-grow: 1;
`;

const Rating = styled.p`
  color: ${(props) => (props.rating < 5 ? "red" : "green")};
  display: inline-block;
`;

export default function Review({
  author_name,
  movie_review,
  movie_title,
  rating,
}) {
  return (
    <StyledReview>
      <Author>
        <p>
          {author_name} for {movie_title}
        </p>
      </Author>
      <MovieReview>
        <p>
          {movie_review} <br />
        </p>
        <p>
          Rating: <Rating rating={rating}>{rating}</Rating>
        </p>
      </MovieReview>
    </StyledReview>
  );
}
