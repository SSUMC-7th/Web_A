import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SkeletonMovieCard from '../components/SkeletonMovieCard';

const fetchUpcomingMovies = async (page) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_MOVIE_API_URL;
  const response = await fetch(`${apiUrl}/movie/upcoming?api_key=${apiKey}&language=ko-KR&page=${page}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const UpcomingPage = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['upcomingMovies', page],
    queryFn: () => fetchUpcomingMovies(page),
    keepPreviousData: true,
  });

  const handleNextPage = () => {
    if (data && page < data.total_pages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (isLoading) {
    return (
      <SkeletonContainer>
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonMovieCard key={index} />
        ))}
      </SkeletonContainer>
    );
  }

  if (isError) return <h1 style={{ color: 'white' }}>에러 발생</h1>;

  return (
    <Container>
      <Title>개봉 예정중인 영화</Title>
      <MovieList>
        {data.results.map((movie) => (
          <MovieCard key={movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>
            <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <Label>{movie.title}</Label>
          </MovieCard>
        ))}
      </MovieList>
      <Pagination>
        <Button disabled={page === 1} onClick={handlePrevPage}>이전</Button>
        <PageIndicator>{page} 페이지</PageIndicator>
        <Button disabled={data && page === data.total_pages} onClick={handleNextPage}>다음</Button>
      </Pagination>
    </Container>
  );
};

export default UpcomingPage;

const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

const Container = styled.div`
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

const MovieCard = styled.div`
  text-align: center;
  cursor: pointer;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const Label = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  color: white;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #ff4b5c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 10px;

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.span`
  font-size: 18px;
  color: white;
`;
