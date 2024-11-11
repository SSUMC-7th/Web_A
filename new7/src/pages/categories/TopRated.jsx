import * as S from "./CategoryStyle";
import { useNavigate } from "react-router-dom";
import CardListSkeleton from "../../components/Skeleton/card-list-skeleton";
import { useGetInfiniteMovies } from "../../hooks/queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const baseURL = "https://image.tmdb.org/t/p/original";

export const TopRated = () => {
  const navigate = useNavigate();

  const {
    data: movies,
    isLoading,
    isFetching,
    hasNextPage,
    isPending,
    fetchNextPage,
    isFetchNextPage,
    error,
    isError,
  } = useGetInfiniteMovies("top_rated");
  const moveToDetailPage = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  // if (isPending)
  //   return (
  //     <S.MovieList>
  //       <CardListSkeleton number={40}></CardListSkeleton>
  //     </S.MovieList>
  //   );
  if (isError) return <h1 style={{ color: "white" }}>에러에요 ㅠㅠ</h1>;

  return (
    <>
      <S.MovieList>
        {movies?.pages.map((page) => {
          return page.results.map((movie, _) => {
            return (
              <S.MovieCard
                key={movie.id}
                onClick={() => moveToDetailPage(movie.id)}
              >
                <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
                <div className="title">{movie.title}</div>
                <div className="releaseDate">{movie.release_date}</div>
              </S.MovieCard>
            );
          });
        })}
        {!isFetching && <CardListSkeleton number={20} />}
      </S.MovieList>
      <div
        ref={ref}
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {isFetching && <ClipLoader color={"#fff"} />}
      </div>
    </>
  );
};
