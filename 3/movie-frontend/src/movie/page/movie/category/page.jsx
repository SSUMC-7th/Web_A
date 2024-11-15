import { useLocation, useNavigate } from "react-router-dom";
import { MovieList } from "../../../component/movie-list";
import PostCard from "../../../component/post-card";
import useGetMovieData from "../../../hook/api/get/use-get-movie-data";
import LoadingCard from "../../../component/loading-card";
import { Title } from "../../../../common/component/title";
import PageButton from "../../../component/page-button";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import usePageCount from "../../../hook/util/use-page-count";

export default function CategoryPage() {
  const location = useLocation();
  const { page, pageUp, pageDown } = usePageCount();
  const category = location.state.apiCategory || {};
  const { data, isLoading, error } = useGetMovieData({
    key: category + page,
    category: category,
    page: page,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <section className="px-[4rem] pt-[1rem]">
        <MovieList>
          {Array(6)
            .fill()
            .map((_, index) => (
              <LoadingCard key={index} />
            ))}
        </MovieList>
      </section>
    );
  }

  if (error) {
    return <Title>에러 : {`${error.message}`}</Title>;
  }

  const posterDatas = data.results;

  return (
    <section className="relative h-full">
      <section className="px-[4rem] pt-[1rem]">
        <MovieList>
          {posterDatas.map((posterData, index) => (
            <PostCard
              key={index}
              imgUrl={posterData.poster_path}
              title={posterData.title}
              subTitle={posterData.release_date}
              id={posterData.id}
              onClick={() =>
                navigate(`/movie/detail/${posterData.id}`, {
                  state: posterData.id,
                })
              }
            />
          ))}
        </MovieList>
      </section>
      {page !== 1 && (
        <PageButton
          className="absolute z-10 top-0 left-0 group transition duration-300"
          onClick={pageDown}
        >
          <CaretLeft className="text-transparent group-hover:text-white text-[3rem] transition duration-300" />
        </PageButton>
      )}
      <PageButton
        className="absolute z-10 top-0 right-0 group transition duration-300"
        onClick={pageUp}
      >
        <CaretRight className="text-transparent group-hover:text-white text-[3rem] transition duration-300" />
      </PageButton>
    </section>
  );
}
