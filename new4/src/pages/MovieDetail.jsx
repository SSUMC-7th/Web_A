import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";

const MovieDetail = () => {
  const { movieId } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${movieId}?language=ko-KR`);

  console.log("Movie Data:", movie);

  const { data: creditsData } = useCustomFetch(
    `/movie/${movieId}/credits?language=us-US`
  );

  const credits = creditsData?.cast || [];

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
        <h1 style={{ color: "white" }}>에러에요 ㅠㅠ</h1>
      </div>
    );
  }

  return (
    <DetailMainLayout>
      <DetailHeader
        $backdrop={
          movie?.backdrop_path
            ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
            : ""
        }
      >
        <DetailOverlay />
        <MovieDetailInfo>
          <h1>{movie.title}</h1>
          <p>평균 평점: {movie.vote_average}</p>
          <p>개봉일: {movie.release_date}</p>
          <p>{movie.overview}</p>
        </MovieDetailInfo>
      </DetailHeader>

      <CreditContainer>
        <h2>감독/출연</h2>
        <CreditList>
          {credits.slice(0, 12).map((cast) => (
            <CreditCard key={cast.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </CreditCard>
          ))}
        </CreditList>
      </CreditContainer>
    </DetailMainLayout>
  );
};

export default MovieDetail;

const DetailMainLayout = styled.div`
  color: white;
  padding: 20px;
`;

const DetailHeader = styled.div`
  background-image: url(${(props) => props.$backdrop});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  border-radius: 15px;
`;

const DetailOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.3),
    transparent
  );
  z-index: 1;
`;

const MovieDetailInfo = styled.div`
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

const CreditContainer = styled.div`
  margin-top: 50px;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const CreditList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

const CreditCard = styled.div`
  text-align: center;
  width: 150px;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 2px solid white;
    transition: transform 0.3s ease;
    object-fit: cover;
  }
  img:hover {
    transform: scale(1.1);
  }
  p:nth-of-type(1) {
    font-size: 15px;
    color: white;
    margin-top: 10px;
  }

  p:nth-of-type(2) {
    font-size: 15px;
    color: gray;
    margin-top: 5px;
  }
`;
