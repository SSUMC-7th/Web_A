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

  const detailData = data || [];

  console.log(detailData);

  if (loading) {
    return <></>;
  }

  if (error) {
    return <></>;
  }

  return (
    <div>
      <DetailTopSection
        bgImgUrl={detailData.backdrop_path}
        postImgUrl={detailData.belongs_to_collection?.poster_path}
        title={detailData.title}
        overview={detailData.overview}
        date={detailData.release_data}
        rating={detailData.vote_average}
        genres={detailData.genres}
      />
    </div>
  );
}
