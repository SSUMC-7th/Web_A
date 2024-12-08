import React from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import LoadingSpinner from '../components/LoadingSpinner';

const fetchPopularActors = async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_MOVIE_API_URL;
  const response = await fetch(`${apiUrl}/person/popular?api_key=${apiKey}&language=ko-KR`);

  if (!response.ok) {
    throw new Error('Failed to fetch popular actors');
  }
  return response.json();
};

const PopularActorsPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['popularActors'],
    queryFn: fetchPopularActors,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorText>인기 배우 정보를 가져오는 데 실패했습니다.</ErrorText>;

  const actors = data.results || [];

  return (
    <Container>
      <SectionTitle>인기 배우</SectionTitle>
      <ActorGrid>
        {actors.map((actor) => (
          <ActorCard key={actor.id}>
            <ActorImage
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <ActorName>{actor.name}</ActorName>
          </ActorCard>
        ))}
      </ActorGrid>
    </Container>
  );
};

export default PopularActorsPage;

const Container = styled.div`
  padding: 20px;
  background-color: #141414;
  color: white;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ActorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const ActorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ActorImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ActorName = styled.p`
  font-size: 16px;
  color: white;
`;

const ErrorText = styled.p`
  color: red;
  text-align: center;
  margin-top: 20px;
`;
