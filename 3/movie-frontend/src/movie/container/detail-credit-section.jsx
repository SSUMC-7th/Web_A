import React, { useState } from "react";
import useGetMovieCredits from "../hook/api/get/use-get-movie-credits";
import PostCard from "../component/post-card";
import { MovieList } from "../component/movie-list";
import { Switch } from "../../common/component/switch";
import LoadingCard from "../component/loading-card";

export default function DetailCreditSection({ id }) {
  const { isLoading, isError, data } = useGetMovieCredits({
    key: `credit${id}`,
    id,
  });

  const [activeCategory, setActiveCategory] = useState("출연진");

  if (isLoading) {
    return (
      <MovieList>
        {Array(6)
          .fill()
          .map((_, index) => (
            <LoadingCard key={index} />
          ))}
      </MovieList>
    );
  }

  if (isError) {
    return <>에러 발생</>;
  }

  const creditData = data || {};
  const actor = creditData.cast || [];
  const crew = creditData.crew || [];

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Switch
        selectedCategory={activeCategory}
        categories={["출연진", "제작진"]}
        onCategorySelect={handleCategorySelect}
        className="mt-[1rem] ml-[1rem]"
      />
      <MovieList>
        {(activeCategory === "출연진" ? actor : crew).map(
          (creditData, index) => (
            <PostCard
              key={index}
              imgUrl={creditData.profile_path}
              title={creditData.name}
              subTitle={
                activeCategory === "출연진"
                  ? creditData.character
                  : creditData.job
              }
              id={creditData.id}
            />
          )
        )}
      </MovieList>
    </>
  );
}
