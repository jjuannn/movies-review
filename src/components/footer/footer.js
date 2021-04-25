import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  grid-area: footer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Created by Juan Avero </p>
    </StyledFooter>
  );
}
