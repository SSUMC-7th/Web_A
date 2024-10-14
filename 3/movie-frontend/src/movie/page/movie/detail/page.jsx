import { useLocation } from "react-router-dom";
import useGetMovieDetail from "../../../hook/api/get/use-get-movie-detail";

export default function DetailPage() {
  const location = useLocation();
  const id = location.state || {};

  const { data, loading, error } = useGetMovieDetail({
    key: id,
    keyword_id: id,
  });

  const detailDatas = data;
  console.log(detailDatas);

  return <div></div>;
}
