import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    "Content-Type": "application/json",
  },
});
