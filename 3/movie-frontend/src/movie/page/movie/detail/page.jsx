import { useLocation } from "react-router-dom";
import useGetMovieDetail from "../../../hook/api/get/use-get-movie-detail";
import { DetailTopSection } from "../../../container/detail-top-section";
import DetailCreditSection from "../../../container/detail-credit-section";

export default function DetailPage() {
  const location = useLocation();
  const id = location.state || {};

  return (
    <>
      <DetailTopSection id={id} />
      <DetailCreditSection id={id} />
    </>
  );
}
