import Movies from "./Movie";
import * as S from "./CategoryStyle";

const NowPlaying = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/now_playing?language=ko-KRS&page=2`);

  const { data } = useGetMovies({ category: "now_playing", pageParam: 1 });

  if (isLoading) {
    return (
      <div>
        <h1 style={{ color: "white" }}>로딩 중이에요 ~.~</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>style={{ color: "white" }}에러에요 ㅠㅠ</h1>
      </div>
    );
  }

  return (
    <S.MovieList>
      {movieslist?.results?.map((movie) => (
        <S.MovieCard key={movie.id} onClick={() => moveToDetailPage(movie.id)}>
          <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
          <div className="title">{movie.title}</div>
          <div className="releaseDate">{movie.release_date}</div>
        </S.MovieCard>
      ))}
    </S.MovieList>
  );
};

export default NowPlaying;
