import TextBox from "../../common/component/text-box";
import PostCard from "../component/post-card";

export default function DetailTopSection({
  bgImgUrl,
  postImgUrl,
  title,
  overview,
  date,
  rating,
  genres,
}) {
  return (
    <div className="relative w-full h-auto">
      <BackgroundImage />
      <TextBox className="absolute z-10 left-10 top-1/2" text="평점" />
      <PostCard
        className="absolute z-10 right-10 top-1/2 transform -translate-y-1/2"
        imgUrl={postImgUrl}
        width="12rem"
        height="18rem"
      />
    </div>
  );

  function BackgroundImage() {
    return (
      <img
        className="w-full h-auto object-cover"
        src={`https://image.tmdb.org/t/p/original${bgImgUrl}`}
        alt="background"
      />
    );
  }
}
