import { clientAuth } from "../../../common/api/client";

export const getMovieData = async (category) => {
  const response = await clientAuth.get(`${category}?language=ko-KR&page=1`);
  return response.data;
};
