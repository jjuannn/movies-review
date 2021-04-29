import React, { useEffect } from "react";
import LoadingSpinner from "../components/loading/loading";
import Review from "../components/review/review";
import styled from "@emotion/styled";
import useReviews from "../hooks/useReviews";

const ListPageContainer = styled.section`
  padding: 1% 4%;
`;

export default function ListPage() {
  const { loading, data, error } = useReviews();
  if (data) {
    console.log(data);
  }
  return (
    <ListPageContainer>
      <h1>Take a look to our users reviews! </h1>
      <div>
        {data &&
          data.map((review) => {
            return (
              <>
                <Review {...review} />
              </>
            );
          })}
      </div>
    </ListPageContainer>
  );
}
