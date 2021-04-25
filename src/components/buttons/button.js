import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 10px;
  background: var(--purple);
  color: white;
  border: none;
  border-radius: 50px;
  margin: ${(props) => (props.withMargin ? props.margin : "0px")};
  &:hover {
    cursor: pointer;
  }
`;
export default function Button(props) {
  const { text, withMargin, margin } = props;
  return (
    <StyledButton withMargin={withMargin} margin={margin}>
      {text}
    </StyledButton>
  );
}
