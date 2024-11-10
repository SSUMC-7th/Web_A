import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "../../pages/Search/search.style";
import { useState } from "react";
import useCustomFetch from "../../hooks/useCustomFetch";
import CardListSkeleton from "../../components/Skeleton/card-list-skeleton";

const SearchMovieList = () => {
  const navigate = useNavigate();

  const baseURL = "https://image.tmdb.org/t/p/original";

  const [searchParam, setSearchParam] = useSearchParams({
    mq: "",
  });

  const mq = searchParam.get(`mq`);

  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1;`;
  const { data: movies, isLoading, isError } = useCustomFetch(url);

  const moveToDetailPage = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  if (isError) {
    return <h1 style={{ color: "white" }}>에러발생</h1>;
  }

  if (isLoading) {
    return (
      <S.MovieGridContainer>
        <CardListSkeleton number={20}></CardListSkeleton>
      </S.MovieGridContainer>
    );
  }

  if (mq && movies?.results.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2 style={{ color: "#ffc1e0" }}>검색어 " {mq} " 에</h2>
        <h2 style={{ color: "#ffc1e0" }}>해당하는 영화는 없어요 ㅠㅅㅠ</h2>
      </div>
    );
  }

  return (
    <S.MovieGridContainer>
      {movies?.results?.map((movie) => (
        <S.Card key={movie.id} onClick={() => moveToDetailPage(movie.id)}>
          <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
        </S.Card>
      ))}
    </S.MovieGridContainer>
  );
};

export default SearchMovieList;
