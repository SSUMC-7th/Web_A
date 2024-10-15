import { useQuery } from "@tanstack/react-query";
import { getMovieData } from "../../../api/get/get-movie-data";

export default function useGetMovieData({ key, category }) {
  return useQuery({
    queryKey: [key],
    queryFn: () => getMovieData(category),
  });
}
