import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const fetchTVDetails = async ({ queryKey }) => {
  const [_, tvId] = queryKey;
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_MOVIE_API_URL;
  const response = await fetch(`${apiUrl}/tv/${tvId}?api_key=${apiKey}&language=ko-KR`);

  if (!response.ok) {
    throw new Error('Failed to fetch TV series details');
  }
  return response.json();
};

const TVDetailPage = () => {
  const { tvId } = useParams();

  const { data: tvSeries, isLoading, isError } = useQuery({
    queryKey: ['tvDetails', tvId],
    queryFn: fetchTVDetails,
  });

  if (isLoading) return <LoadingText>로딩 중...</LoadingText>;
  if (isError) return <ErrorText>에러 발생</ErrorText>;

  if (!tvSeries) return null;

  return (
    <Container>
      {tvSeries.backdrop_path ? (
        <TVHeader $backdrop={`https://image.tmdb.org/t/p/w1280${tvSeries.backdrop_path}`}>
          <GradientOverlay />
          <TVInfo>
            <h1>{tvSeries.name}</h1>
            <p>평균 평점: {tvSeries.vote_average}</p>
            <p>첫 방영일: {tvSeries.first_air_date}</p>
            <p>{tvSeries.overview}</p>
          </TVInfo>
        </TVHeader>
      ) : (
        <FallbackHeader>
          <h1>{tvSeries.name}</h1>
        </FallbackHeader>
      )}
    </Container>
  );
};

export default TVDetailPage;

const Container = styled.div`
  color: white;
  padding: 20px;
`;

const TVHeader = styled.div`
  background-image: url(${(props) => props.$backdrop});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
`;

const FallbackHeader = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: white;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3), transparent);
  z-index: 1;
`;

const TVInfo = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  max-width: 600px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    margin: 10px 0;
  }
`;

const LoadingText = styled.h1`
  color: white;
  text-align: center;
`;

const ErrorText = styled.h1`
  color: red;
  text-align: center;
`;
