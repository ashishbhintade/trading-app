import axios from "axios";

const TOKEN = "cd5vo4qad3i9oiglu11gcd5vo4qad3i9oiglu120";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
