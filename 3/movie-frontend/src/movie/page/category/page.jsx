import styled from "styled-components";
import CategoryCard from "../../component/category-card";

export default function CategoryPage() {
  return (
    <>
      <Title>카테고리</Title>
      <CategoryList>
        <CategoryCard
          imgUrl="/category/now-playing.jpg"
          text="현재 상영중인"
          path="now-playing"
        />
        <CategoryCard
          imgUrl="/category/popular.jpg"
          text="인기있는"
          path="popular"
        />
        <CategoryCard
          imgUrl="/category/top-rated.jpg"
          text="높은 평가를 받은"
          path="top-rated"
        />
        <CategoryCard
          imgUrl="/category/up-coming.jpg"
          text="개봉 예정중인"
          path="up-coming"
        />
      </CategoryList>
    </>
  );
}

const Title = styled.h2`
  color: white;
  margin: 0;
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 0.5rem;
`;
