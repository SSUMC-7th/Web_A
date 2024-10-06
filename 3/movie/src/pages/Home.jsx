import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const baseURL = "https://image.tmdb.org/t/p/original";

const StyledCard = styled.div`
  width: 120px;
  height: auto;
  cursor: pointer;
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 5px;
    transition: filter 0.3s ease;
    &:hover {
      filter: brightness(0.5);
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

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODJkOWM0N2YzNjBmZjUxZWE5MjEwZjE0MzA0Zjc1OCIsIm5iZiI6MTcyODE5Njg0OC4yOTk5MzMsInN1YiI6IjY3MDIyZjRkYzNjNWIzYTFhOGY3YTAyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yur5uWWk9x-EoJ1NLTpyM7D92US8zfc1dnQtPQXkJDc`,
          },
        }
      );
      setMovies(movies);
    };
    getMovies();
  }, []);

  console.log(movies.data?.results);
  return (
    <div>
      {movies.data?.results.map((movie) => (
        <StyledCard key={movie.id} className="card">
          <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
          <div className="title">{movie.title}</div>
          <div className="releaseDate">{movie.release_date}</div>
        </StyledCard>
      ))}
    </div>
  );
}

export default Home;
