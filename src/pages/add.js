import React from "react";
import Title from "../components/title/title";
import Form from "../components/form/form";
import styled from "@emotion/styled";

const AddContainer = styled.section`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
`;

const AddTitle = styled(Title)`
  padding: 0 !important;
`;

const FormContainer = styled.div`
  width: 90%;
`;

export default function AddReviewPage() {
  return (
    <AddContainer>
      <AddTitle text="Add review" />
      <FormContainer>
        <Form />
      </FormContainer>
    </AddContainer>
  );
}
