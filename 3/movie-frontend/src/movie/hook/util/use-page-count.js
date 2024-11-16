import { useState } from "react";

export default function usePageCount() {
  const [page, setPage] = useState(1);

  const pageUp = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const pageDown = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return {
    page,
    pageUp,
    pageDown,
  };
}
