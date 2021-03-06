import React from "react";
import styled from "@emotion/styled";

const Loading = styled.div`
  border: 16px solid black;
  border-top: 16px solid var(--purple);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function LoadingSpinner() {
  return <Loading />;
}
