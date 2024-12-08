import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import useCustomFetch from '../hooks/useCustomFetch';
import MovieCard from '../components/Card/Card';

const HomePage = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const { data: nowPlayingData, isLoading: nowPlayingLoading, isError: nowPlayingError } = useCustomFetch(
        `/movie/now_playing?api_key=${apiKey}&language=ko-KR`
    );
    const { data: tvSeriesData, isLoading: tvSeriesLoading, isError: tvSeriesError } = useCustomFetch(
        `/tv/popular?api_key=${apiKey}&language=ko-KR`
    );

    const nowPlayingRef = useRef(null);
    const tvSeriesRef = useRef(null);

    const slideLeft = (ref) => {
        ref.current.scrollBy({ left: -400, behavior: 'smooth' });
    };

    const slideRight = (ref) => {
        ref.current.scrollBy({ left: 400, behavior: 'smooth' });
    };

    if (nowPlayingLoading || tvSeriesLoading) return <h1 style={{ color: 'white' }}>로딩 중...</h1>;
    if (nowPlayingError || tvSeriesError) return <h1 style={{ color: 'white' }}>에러 발생</h1>;

    return (
        <MainContent>
            {nowPlayingData?.results?.length > 0 && (
                <>
                    <h2>현재 상영 중</h2>
                    <SliderContainer>
                        <ArrowButton onClick={() => slideLeft(nowPlayingRef)}>&lt;</ArrowButton>
                        <MovieList ref={nowPlayingRef}>
                            {nowPlayingData.results.map((movie) => (
                                <StyledLink to={`/movies/${movie.id}`} key={movie.id}>
                                    <MovieCard movie={movie} showReleaseDate />
                                </StyledLink>
                            ))}
                        </MovieList>
                        <ArrowButton onClick={() => slideRight(nowPlayingRef)}>&gt;</ArrowButton>
                    </SliderContainer>
                </>
            )}

            {tvSeriesData?.results?.length > 0 && (
                <>
                    <h2>인기 TV 시리즈</h2>
                    <SliderContainer>
                        <ArrowButton onClick={() => slideLeft(tvSeriesRef)}>&lt;</ArrowButton>
                        <MovieList ref={tvSeriesRef}>
                            {tvSeriesData.results.map((tv) => (
                                <StyledLink to={`/tv/${tv.id}`} key={tv.id}>
                                    <MovieCard movie={tv} showReleaseDate={false} />
                                </StyledLink>
                            ))}
                        </MovieList>
                        <ArrowButton onClick={() => slideRight(tvSeriesRef)}>&gt;</ArrowButton>
                    </SliderContainer>
                </>
            )}
        </MainContent>
    );
};

export default HomePage;

const MainContent = styled.div`
    flex: 1;
    color: white;
    padding: 20px;
    overflow-x: hidden;
`;

const SliderContainer = styled.div`
    display: flex;
    align-items: center;
`;

const MovieList = styled.div`
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    gap: 20px;
    padding-bottom: 10px;
    &::-webkit-scrollbar {
        display: none; 
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const ArrowButton = styled.button`
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 50%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;
