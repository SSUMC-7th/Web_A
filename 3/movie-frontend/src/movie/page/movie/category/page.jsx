import { useLocation } from "react-router-dom";
import { MovieList } from "../../../component/movie-list";
import PostCard from "../../../component/post-card";
import useGetMovieData from "../../../hook/api/get/use-get-movie-data";
import LoadingCard from "../../../component/loading-card";
import { Title } from "../../../../common/component/title";

export default function CategoryPage() {
  const location = useLocation();
  const category = location.state.apiCategory || {};
  const { data, isLoading, error } = useGetMovieData({
    key: category,
    category: category,
  });

  if (isLoading) {
    return (
      <MovieList>
        {Array(6)
          .fill()
          .map((_, index) => (
            <LoadingCard key={index} />
          ))}
      </MovieList>
    );
  }

  if (error) {
    return <Title>에러 : {`${error.message}`}</Title>;
  }

  const posterDatas = data.results;

  return (
    <MovieList>
      {posterDatas.map((posterData, index) => (
        <PostCard
          key={index}
          imgUrl={posterData.poster_path}
          title={posterData.title}
          date={posterData.release_date}
          id={posterData.id}
        />
      ))}
    </MovieList>
  );
}
