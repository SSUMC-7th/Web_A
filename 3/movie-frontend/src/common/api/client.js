import axios from "axios";

const client = ({
  baseUrl = "https://api.themoviedb.org/3/movie/",
  token = null,
}) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.create({
    baseURL: baseUrl,
    headers,
  });
};

const clientAuth = client({
  token: import.meta.env.VITE_ACCESS_TOKEN,
});

export { client, clientAuth };
