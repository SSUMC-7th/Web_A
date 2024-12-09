import { movieClientAuth } from "@/common/api/client";
import { useQuery } from "@tanstack/react-query";

export default function useGetMovieData({ category, page }: Props) {
  const getMovieData = async ({ category, page = 1 }: Props) => {
    const response = await movieClientAuth<RespType>({
      url: `movie/${category}?language=ko-KR&page=${page}`,
      method: "GET",
    });
    return response.data;
  };

  return useQuery({
    queryKey: ["movie", category, page],
    queryFn: () => getMovieData({ category, page }),
  });
}

interface Props {
  category: string;
  page: number;
}

interface RespType {
  dates: {
    maximum: string;
    minimun: string;
  };
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
}
