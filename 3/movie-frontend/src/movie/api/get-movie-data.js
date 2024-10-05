import { client } from "./../../common/api/client";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const getMovieData = async (category) => {
  const response = await client.get(`${category}?language=ko-KR&page=1`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
