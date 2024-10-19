import { clientAuth } from "../../../common/api/client";

export const getMovieCredits = async (id) => {
  const resp = await clientAuth.get(`${id}/credits?language=ko-KR`);
  return resp.data;
};
