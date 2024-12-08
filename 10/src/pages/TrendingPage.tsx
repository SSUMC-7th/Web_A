import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from '../components/LoadingSpinner';

const fetchTrendingMovies = async (page) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_MOVIE_API_URL;
  const response = await fetch(`${apiUrl}/trending/movie/week?api_key=${apiKey}&language=ko-KR&page=${page}`);

  if (!response.ok) {
    throw new Error('Failed to fetch trending movies');
  }
  return response.json();
};

const TrendingPage = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['trendingMovies', page],
    queryFn: () => fetchTrendingMovies(page),
    keepPreviousData: true,
  });

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (data && page < data.total_pages) setPage((prev) => prev + 1);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorText>트렌딩 영화를 불러오는 데 문제가 발생했습니다.</ErrorText>;

  const movies = data.results || [];

  return (
    <Container>
      <Title>트렌딩 영화</Title>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieCard>
        ))}
      </MovieGrid>
      <Pagination>
        <Button disabled={page === 1} onClick={handlePrevPage}>이전</Button>
        <PageIndicator>{page} 페이지</PageIndicator>
        <Button disabled={data && page === data.total_pages} onClick={handleNextPage}>다음</Button>
      </Pagination>
    </Container>
  );
};

export default TrendingPage;

const Container = styled.div`
  padding: 20px;
  background-color: #141414;
  color: white;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const MovieCard = styled.div`
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`;

const MovieTitle = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: white;
`;

const ErrorText = styled.p`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #ff4d6d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.span`
  font-size: 16px;
  color: white;
`;
