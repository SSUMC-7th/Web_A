import { clientAuth } from "../../../common/api/client";

export const getMovieDetail = async (keyword_id) => {
  const response = await clientAuth.get(`${keyword_id}?language=ko-KR&page=1`);
  return response.data;
};
