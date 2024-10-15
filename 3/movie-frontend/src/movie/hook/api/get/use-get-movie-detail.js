import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../../../api/get/get-movie-detail";

export default function useGetMovieDetail({ keyword_id }) {
  return useQuery({
    queryKey: [keyword_id],
    queryFn: () => getMovieDetail(keyword_id),
  });
}
