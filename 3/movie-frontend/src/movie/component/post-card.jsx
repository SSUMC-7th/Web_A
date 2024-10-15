import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PostCard({ imgUrl, title, date, id }) {
  const navigate = useNavigate();
  return (
    <Column
      onClick={() => {
        navigate(`/movie/detail/${id}`, { state: id });
      }}
    >
      <CardImage src={`https://image.tmdb.org/t/p/original${imgUrl}`} />
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Column>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  align-items: start;
  justify-content: start;
  color: white;
`;

const CardImage = styled.img`
  width: 6rem;
  height: 9rem;
  border-radius: 0.3rem;
  margin: 0;
  object-fit: cover;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.7);
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 0.6rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 6rem;
  display: inline-block;
`;
const Date = styled.div`
  font-size: 0.5rem;
  margin: 0;
  padding: 0;
`;
