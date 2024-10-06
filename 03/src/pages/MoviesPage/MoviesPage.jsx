import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 이미지 import (올바른 경로 확인)
import Movie1 from '../../assets/movie1.jpg';
import Movie2 from '../../assets/movie2.jpg';
import Movie3 from '../../assets/movie3.jpg';
import Movie4 from '../../assets/movie4.jpg';

const MoviesPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>카테고리</Title>
            <MovieGrid>
                <MovieCard onClick={() => navigate('/movies/now-playing')}>
                    <MovieImage src={Movie1} alt="현재 상영중인 영화" />
                    <Label>현재 상영중인</Label>
                </MovieCard>
                <MovieCard onClick={() => navigate('/movies/popular')}>
                    <MovieImage src={Movie2} alt="인기있는 영화" />
                    <Label>인기있는</Label>
                </MovieCard>
                <MovieCard onClick={() => navigate('/movies/top-rated')}>
                    <MovieImage src={Movie3} alt="높은 평가를 받은 영화" />
                    <Label>높은 평가를 받은</Label>
                </MovieCard>
                <MovieCard onClick={() => navigate('/movies/up-coming')}>
                    <MovieImage src={Movie4} alt="개봉 예정중인 영화" />
                    <Label>개봉 예정중인</Label>
                </MovieCard>
            </MovieGrid>
        </Container>
    );
};

export default MoviesPage;

const Container = styled.div`
    padding: 20px;
    color: white;
    background-color: #000;
    height: 100%;
`;

const Title = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
`;

const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 카드를 가로로 배치 */
    gap: 20px; /* 카드 사이 간격 */
    padding: 10px 0;
`;

const MovieCard = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05); /* hover 시 확대 효과 */
    }
`;

const MovieImage = styled.img`
    width: 100%;
    height: 180px; /* 고정된 높이 */
    object-fit: cover; /* 이미지를 비율에 맞춰 자르기 */
    border-radius: 8px;
    display: block;
`;

const Label = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* 반투명한 배경 */
    color: white;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px; /* 살짝 둥근 모서리 */
`;
