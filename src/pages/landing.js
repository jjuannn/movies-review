import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/title/title";
import Button from "../components/buttons/button";
import styled from "@emotion/styled";

const LandingContainer = styled.section`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const MovieIcon = styled.p`
  font-size: 5rem;
  display: inline-block;
`;

export default function LandingPage() {
  return (
    <LandingContainer>
      <Title isMainTitle text="Welcome!" />
      <MovieIcon>
        <i className="fas fa-film"></i>
      </MovieIcon>
      <Title text="This is a place where anyone with no idea about movies can rate them!" />
      <div>
        <Link to="/reviews/add">
          <Button withMargin margin="10px" text="Add review" />
        </Link>
        <Link to="/reviews/list">
          <Button withMargin margin="10px" text="Reviews" />
        </Link>
      </div>
    </LandingContainer>
  );
}
