import { axiosInstance } from "../../apis/axios-instance";

const useGetMovies = async ({ category, page }) => {
  const { data } = await axiosInstance.get(
    `/movie/${movieCategory}?language=ko-KRS=${page}`
  );
};
