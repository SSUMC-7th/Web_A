import { clientAuth } from "../../../common/api/client";

export const getMovieData = async (category, page = 1) => {
  const response = await clientAuth.get(
    `${category}?language=ko-KR&page=${page}`
  );
  return response.data;
};
