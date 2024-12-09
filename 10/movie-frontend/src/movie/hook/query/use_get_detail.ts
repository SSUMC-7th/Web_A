import { movieClientAuth } from "@/common/api/client";
import { useQuery } from "@tanstack/react-query";

export function useGetMovieDetail({ movie_id }: Props) {
  const getMovieDetail = async ({ movie_id }: Props) => {
    const response = await movieClientAuth<RespType>({
      url: `movie/${movie_id}?language=ko-KR&page=1`,
      method: "GET",
    });
    return response.data;
  };

  return useQuery({
    queryKey: ["movie", movie_id],
    queryFn: () => getMovieDetail({ movie_id }),
  });
}

interface Props {
  movie_id: string;
}

interface RespType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: string | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
