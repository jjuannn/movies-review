import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";

const PageTitle = styled.h1`
  font-family: var(--poppins-bold);
`;

const StyledHeader = styled.header`
  grid-area: header;
  padding: 1rem;
`;

const Link = styled(RouterLink)`
  color: var(--purple);
`;

export default function Header() {
  return (
    <StyledHeader>
      <PageTitle>
        <Link to="/">Movies Reviews</Link>
      </PageTitle>
    </StyledHeader>
  );
}
