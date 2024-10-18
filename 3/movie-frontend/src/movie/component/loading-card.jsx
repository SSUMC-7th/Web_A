import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingCard() {
  return (
    <div className="flex flex-col m-[0.5rem]">
      <Skeleton height="9rem" width="100%" />
      <Skeleton height="1.25rem" width="6.25rem" className="mt-2" />
      <Skeleton height="1rem" width="5rem" className="mt-1" />
    </div>
  );
}
