import { Link } from "react-router-dom";

export default function DropdownMenu() {
  const cardStyle: string = "py-[0.5rem] hover:text-gray-600 px-[0.5rem]";
  return (
    <div className="flex flex-col absolute end-0 left-0 w-[10rem] bg-white rounded-sm py-[0.5rem]">
      <Link
        to={{ pathname: "/category/now-playing" }}
        state={{ apiCategory: "now_playing" }}
        className={cardStyle}
      >
        now-playing
      </Link>
      <Link
        to={{ pathname: "/category/popular" }}
        state={{ apiCategory: "popular" }}
        className={cardStyle}
      >
        popular
      </Link>
      <Link
        to={{ pathname: "/category/top-rated" }}
        state={{ apiCategory: "top_rated" }}
        className={cardStyle}
      >
        top-rated
      </Link>
      <Link
        to={{ pathname: "/category/upcoming" }}
        state={{ apiCategory: "upcoming" }}
        className={cardStyle}
      >
        release
      </Link>
    </div>
  );
}
