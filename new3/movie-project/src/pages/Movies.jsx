import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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

function Movies() {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieCategory = category || "popular"; // category가 없으면 기본값으로 "popular"
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieCategory}?language=ko-KR&page=1`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODJkOWM0N2YzNjBmZjUxZWE5MjEwZjE0MzA0Zjc1OCIsIm5iZiI6MTcyODE5Njg0OC4yOTk5MzMsInN1YiI6IjY3MDIyZjRkYzNjNWIzYTFhOGY3YTAyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yur5uWWk9x-EoJ1NLTpyM7D92US8zfc1dnQtPQXkJDc`,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };
    getMovies(); // 카테고리가 있든 없든 getMovies 실행
  }, [category]); // category가 변경될 때마다 API 호출

  return (
    <div>
      <StyledCardList>
        {movies?.map((movie) => (
          <StyledCard key={movie.id} className="card">
            <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
            <div className="title">{movie.title}</div>
            <div className="releaseDate">{movie.release_date}</div>
          </StyledCard>
        ))}
      </StyledCardList>
    </div>
  );
}

export default Movies;
