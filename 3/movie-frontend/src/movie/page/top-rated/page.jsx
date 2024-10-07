import { useQuery } from "@tanstack/react-query";
import { MovieList } from "../../component/movie-list";
import PostCard from "../../component/post-card";
import { getMovieData } from "../../api/get-movie-data";

export default function TopRatedPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["top_rated"],
    queryFn: () => getMovieData("top_rated"),
  });

  if (isLoading) {
    return <div>로딩</div>;
  }

  if (error) {
    return <h2>에러</h2>;
  }

  const posterDatas = data.results;
  console.log(posterDatas);

  return (
    <MovieList>
      {posterDatas.map((posterData, index) => (
        <PostCard
          key={index}
          imageUrl={posterData.poster_path}
          title={posterData.title}
          date={posterData.release_date}
        />
      ))}
    </MovieList>
  );
}
