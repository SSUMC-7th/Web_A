import { useLocation } from "react-router-dom";
import useGetMovieDetail from "../../../hook/api/get/use-get-movie-detail";
import DetailTopSection from "../../../container/detail-top-section";

export default function DetailPage() {
  const location = useLocation();
  const id = location.state || {};

  const { data, loading, error } = useGetMovieDetail({
    key: id,
    keyword_id: id,
  });
  console.log(data);

  if (loading) {
    return <></>;
  }

  if (error) {
    return <></>;
  }

  return (
    <div>
      <DetailTopSection
        bgImgUrl={data.backdrop_path}
        postImgUrl={data.belongs_to_collection.poster_path}
        title={data.title}
        overview={data.overview}
        date={data.release_data}
        rating={data.vote_average}
        genres={data.genres}
      />
    </div>
  );
}
