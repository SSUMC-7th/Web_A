import CreditSection from "@/movie/page/detail/container/credit_section";
import TopSection from "@/movie/page/detail/container/top_section";
import { useId } from "react";

export default function DetailPage() {
  const id = useId();

  return (
    <>
      <TopSection id={id} />
      {/* <CreditSection id={id} /> */}
    </>
  );
}
