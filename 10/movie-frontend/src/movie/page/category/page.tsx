import PageButton from "@/common/component/button/page_button";
import usePageCount from "@/common/hook/use_page_count";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "@/movie/component/post_card";
import useGetMovieData from "@/movie/hook/query/use_get_movie_data";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CategoryPage() {
  const location = useLocation();
  const { page, pageUp, pageDown } = usePageCount();
  const navigate = useNavigate();
  const category = location.state?.apiCategory || "now_playing";
  const { data, isLoading, error } = useGetMovieData({
    category: category,
    page: page,
  });

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <></>;
  }

  const posterDatas = data?.results || [];

  return (
    <section className="relative h-full flex-grow">
      <section className="px-[4rem] pt-[0.5rem] flex-col flex items-center h-full flex-grow">
        <h1 className="text-white text-[3rem]">{category}</h1>
        <div className="flex flex-wrap justify-start items-start">
          {posterDatas.map((posterData, index) => (
            <PostCard
              key={index}
              imgUrl={posterData.poster_path}
              title={posterData.title}
              subTitle={posterData.release_date}
              onClick={() => navigate(`/movie/${posterData.id}`)}
            />
          ))}
        </div>
      </section>
      {page !== 1 && (
        <PageButton
          className="absolute z-10 top-0 left-0 group transition duration-300 h-full flex-grow"
          onClick={pageDown}
        >
          <ArrowLeft className="text-transparent group-hover:text-white text-[3rem] transition duration-300" />
        </PageButton>
      )}
      <PageButton
        className="absolute z-10 top-0 right-0 group transition duration-300"
        onClick={pageUp}
      >
        <ArrowRight className="text-transparent group-hover:text-white text-[3rem] transition duration-300" />
      </PageButton>
    </section>
  );
}
