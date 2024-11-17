import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance";

const useGetMovies = (category, page) => {
  return useQuery({
    queryKey: ["movies", category, page],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get(`/movie/${category}`, {
          params: { page }, // 페이지 번호 전달
        });
        return data;
      } catch (error) {
        console.error(
          "Error fetching movies:",
          error.response || error.message
        );
        throw new Error("Failed to fetch movies");
      }
    },
    keepPreviousData: true, // 이전 페이지 데이터를 유지
  });
};

export { useGetMovies };
