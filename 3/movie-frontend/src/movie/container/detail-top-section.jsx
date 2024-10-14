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
    <div className="relative">
      <BackgroundImage />
      <PostCard className="absolute z-10" imgUrl={postImgUrl} />
    </div>
  );

  function BackgroundImage() {
    return <img src={`https://image.tmdb.org/t/p/original${bgImgUrl}`} />;
  }
}
