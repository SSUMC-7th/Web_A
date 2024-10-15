import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CategoryCard({ imgUrl, text, category, apiCategory }) {
  const navigate = useNavigate();

  return (
    <CategoryCardStyle
      onClick={() => {
        navigate(`/movie/category/${category}`, {
          state: { apiCategory },
        });
      }}
    >
      <CardImage src={imgUrl} />
      <Text>{text}</Text>
    </CategoryCardStyle>
  );
}

const CategoryCardStyle = styled.div`
  position: relative;
  margin: 0.5rem;
`;

const CardImage = styled.img`
  width: 18rem;
  height: 9rem;
  border-radius: 0.3rem;
  object-fit: cover;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.5);
    cursor: pointer;
  }
`;

const Text = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 0.3rem;
`;
