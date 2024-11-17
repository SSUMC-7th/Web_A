/* eslint-disable react-hooks/rules-of-hooks */
import * as S from "./CategoryStyle";
import { useNavigate } from "react-router-dom";
import { useGetMovies } from "../../hooks/queries/useGetMovies";
import { useEffect, useState } from "react";

const baseURL = "https://image.tmdb.org/t/p/original";

export const UpComing = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState([]);

  const {
    data: movies,
    isFetching,
    isError,
    error,
  } = useGetMovies("upComing", page);

  const moveToDetailPage = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  const addMovies = (newMovies) => {
    setAllMovies(newMovies);
  };

  useEffect(() => {
    if (movies?.results) {
      addMovies(movies.results);
    }
  }, [movies]);

  const handlePageChange = (direction) => {
    setPage((prev) =>
      direction === "next" ? prev + 1 : Math.max(prev - 1, 1)
    );
  };

  if (isError)
    return <h1 style={{ color: "white" }}>에러 발생: {error.message}</h1>;

  return (
    <>
      <S.MovieList>
        {allMovies.map((movie) => (
          <S.MovieCard
            key={movie.id}
            onClick={() => moveToDetailPage(movie.id)}
          >
            <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
            <div className="title">{movie.title}</div>
            <div className="releaseDate">{movie.release_date}</div>
          </S.MovieCard>
        ))}
      </S.MovieList>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button
          onClick={() => handlePageChange("prev")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#8B0000",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          disabled={page === 1}
        >
          이전
        </button>

        <span style={{ fontSize: "18px", color: "white" }}>{page} 페이지</span>

        <button
          onClick={() => handlePageChange("next")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#8B0000",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          다음
        </button>
      </div>
    </>
  );
};
