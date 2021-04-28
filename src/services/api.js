import axios from "axios";
const BASE_URL = "http://localhost:8080/reviews/create";

export function createReview(post) {
  return axios({
    method: "POST",
    url: BASE_URL,
    headers: { "Content-Type": "application/json" },
    data: post,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err.response.data);
    });
}
