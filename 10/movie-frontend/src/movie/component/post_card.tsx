import { cn } from "@/lib/utils";

interface PostCardProps {
  className?: string;
  onClick?: () => void;
  imgUrl?: string;
  title?: string;
  subTitle?: string;
  imgStyle?: string;
}

export default function PostCard({
  className = "",
  onClick = () => {},
  imgUrl,
  title = "",
  subTitle = "",
  imgStyle = "h-[9rem] w-[6rem]",
}: PostCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col m-2 items-start justify-start text-white",
        className
      )}
      onClick={onClick}
    >
      <img
        src={
          imgUrl
            ? `https://image.tmdb.org/t/p/original${imgUrl}`
            : `https://picsum.photos/id/222/1800/1200`
        }
        className={cn(
          "rounded-md object-cover transition-filter duration-300 ease-in-out hover:brightness-75 cursor-pointer",
          imgStyle
        )}
        alt={title}
      />
      <div className="text-xs font-medium mt-1 truncate max-w-[6rem]">
        {title}
      </div>
      {subTitle && (
        <div className="text-[0.5rem] mt-1 truncate max-w-[6rem]">
          {subTitle}
        </div>
      )}
    </div>
  );
}
