import { useQuery } from "@tanstack/react-query";
import { getMovieCredits } from "../../../api/get/get-movie-credits";

export default function useGetMovieCredits({ key, id }) {
  return useQuery({
    queryKey: [key],
    queryFn: () => getMovieCredits(id),
  });
}
