import IconButton from "../../common/component/buttons/icon-button";
import { RatingTextBox } from "../../common/component/text-box";
import PostCard from "../component/post-card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import useGetMovieDetail from "../hook/api/get/use-get-movie-detail";

function DetailTopSection({ id }) {
  const navigate = useNavigate();
  const { data, loading, error } = useGetMovieDetail({
    key: id,
    keyword_id: id,
  });

  const detailData = data || {};
  const btc = detailData.belongs_to_collection || {};
  const genres = detailData.genres || [];

  if (loading) {
    return <Skeleton width="100%" height="20rem" />;
  }

  if (error) {
    return <></>;
  }

  return (
    <div className="relative w-full h-auto">
      <BackgroundImage />
      <MovieInfo />
      {btc && btc.poster_path && (
        <PostCard
          className="absolute z-10 right-10 top-1/2 transform -translate-y-1/2 max-lg:hidden"
          imgUrl={btc.poster_path}
          width="12rem"
          height="18rem"
        />
      )}
      <IconButton
        className="absolute z-10 left-[1rem] top-[1rem]"
        icon={<CaretLeft size="2rem" />}
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );

  function BackgroundImage() {
    return (
      <img
        className="w-full h-auto object-cover brightness-50"
        src={`https://image.tmdb.org/t/p/original${detailData.backdrop_path}`}
        alt="background"
      />
    );
  }

  function MovieInfo() {
    return (
      <div className="text-white absolute z-10 left-10 top-1/2 transform -translate-y-1/2">
        <RatingTextBox className="mb-[1rem]" text={detailData.vote_average} />
        <h1 className=" text-[2rem] font-semibold mb-[0.5rem]">
          {detailData.title}
        </h1>
        <div className="font-semibold mb-[2rem]">
          <span className="text-[0.8rem]">{detailData.release_date}</span>
          <span className="text-[0.8rem] font-light mx-[0.5rem]">|</span>
          {genres &&
            genres.map((genre, index) => (
              <span key={index} className="text-[0.8rem]">
                {genre["name"]}
                {index !== genres.length - 1 && <span>·</span>}
              </span>
            ))}
        </div>
        <h1 className="text-[0.7rem] max-w-[40rem] max-md:max-w-[20rem] max-sm:hidden">
          {detailData.overview}
        </h1>
      </div>
    );
  }
}

export { DetailTopSection };
