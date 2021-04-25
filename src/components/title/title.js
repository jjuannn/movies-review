import React from "react";
import styled from "@emotion/styled";

const StyledTitle = styled.h1`
  padding: 1rem;
  font-size: ${(props) => (props.isMainTitle ? "3rem" : "2rem")};
`;

export default function Title(props) {
  const { text } = props;
  return <StyledTitle>{text}</StyledTitle>;
}
