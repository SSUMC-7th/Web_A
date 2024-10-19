import styled from "styled-components";
import { Title } from "../../../common/component/title";
import CategoryCard from "../../component/category-card";

export default function MoviePage() {
  const categorys = ["now-playing", "popular", "top-rated", "up-coming"];
  const api_categorys = ["now_playing", "popular", "top_rated", "up_coming"];
  const texts = [
    "현재 상영중인",
    "인기있는",
    "높은 평가를 받은",
    "개봉 예정중인",
  ];

  return (
    <>
      <Title>카테고리</Title>
      <CategoryList>
        {categorys.map((category, index) => (
          <CategoryCard
            key={category}
            imgUrl={`/category/${category}.jpg`}
            text={texts[index]}
            category={category}
            apiCategory={api_categorys[index]}
          />
        ))}
      </CategoryList>
    </>
  );
}

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 0.5rem;
`;
