import { client } from "../../../common/api/client";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const getMovieDetail = async (keyword_id) => {
  const response = await client.get(`${keyword_id}?language=ko-KR&page=1`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
