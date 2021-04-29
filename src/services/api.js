import axios from "axios";
const BASE_URL = "http://localhost:8080/reviews";

export function createReview(review) {
  return axios({
    method: "POST",
    url: `${BASE_URL}/create`,
    headers: { "Content-Type": "application/json" },
    data: review,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err.response.data);
    });
}

export function getReviews() {
  return axios({
    method: "GET",
    url: `${BASE_URL}/all`,
  })
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => {
      throw new Error(err.response.data);
    });
}
