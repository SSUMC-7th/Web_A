import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../apis/axios-instance";
import useCustomFetch from "../hooks/useCustomFetch";
const baseURL = "https://image.tmdb.org/t/p/original";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const StyledCard = styled.div`
  width: 150px;
  height: auto;
  cursor: pointer;
  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 5px;
    transition: filter 0.3s ease;
    &:hover {
      filter: brightness(0.8);
    }
  }
  .title {
    font-weight: bold;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
  .releaseDate {
    font-size: 0.7rem;
  }
`;
const Movies = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const movieCategory = category || "popular"; // category가 없으면 기본값으로 "popular"
  const {
    data: movieslist,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${movieCategory}?language=ko-KR`);

  // 상세 페이지로 이동하는 함수
  const moveToDetailPage = (movieId) => {
    navigate(`/movies/${movieId}`);
    window.scrollTo(0, 0); // 페이지 상단으로 스크롤 이동
  };

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
    <StyledCardList>
      {movieslist?.results?.map((movie) => (
        <StyledCard key={movie.id} onClick={() => moveToDetailPage(movie.id)}>
          <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
          <div className="title">{movie.title}</div>
          <div className="releaseDate">{movie.release_date}</div>
        </StyledCard>
      ))}
    </StyledCardList>
  );
};

export default Movies;
