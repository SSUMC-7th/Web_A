import styled from "styled-components";
import { Link } from "react-router-dom";
import Cinna from "../image/cinna.png";
import Han from "../image/han.jpg";
import Pocha from "../image/pocha.jpg";
import Pompom from "../image/pompom.png";

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const CategoryCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* 포스터를 화면 너비에 맞게 균등 배치 */
  gap: 45px;
`;

const CategoryCard = styled(Link)`
  width: 330px;
  height: 130px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: filter 0.3s ease;
    &:hover {
      filter: brightness(50%);
    }
  }
  .label {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.4rem;
    border-radius: 5px;
    font-size: 0.8rem;
    color: white;
  }
`;

const Category = () => {
  const categories = [
    { id: 1, label: "현재 상영중인", image: Cinna, category: "now_playing" },
    { id: 2, label: "인기있는", image: Han, category: "popular" },
    { id: 3, label: "높은 평가를 받은", image: Pocha, category: "top_rated" },
    { id: 4, label: "개봉 예정중인", image: Pompom, category: "upcoming" },
  ];

  return (
    <>
      <StyledTitle>카테고리</StyledTitle>
      <CategoryCardList>
        {categories.map((category) => (
          <CategoryCard key={category.id} to={`/movies/${category.category}`}>
            <img src={category.image} alt={category.label} />
            <div className="label">{category.label}</div>
          </CategoryCard>
        ))}
      </CategoryCardList>
    </>
  );
};

export default Category;
