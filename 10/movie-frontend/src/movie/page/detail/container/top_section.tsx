import PostCard from "@/movie/component/post_card";
import { RatingTextBox } from "@/movie/component/rating_text_box";
import { useGetMovieDetail } from "@/movie/hook/query/use_get_detail";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TopSection({ id }: Props) {
  return <></>;
  //   const navigate = useNavigate();
  //   const { data, isLoading, isError } = useGetMovieDetail({
  //     movie_id: id,
  //   });

  //   if (isLoading) {
  //     return <></>;
  //   }

  //   if (isError) {
  //     return <></>;
  //   }
  //   const detailData = data || [];
  //   const btc: string = detailData.belongs_to_collection || {};
  //   const genres = detailData.genres || [];

  //   return (
  //     <div className="relative w-full h-auto">
  //       <BackgroundImage />
  //       <MovieInfo />
  //       {btc && btc.poster_path && (
  //         <PostCard
  //           className="w-[12rem] h-[18rem] absolute z-10 right-10 top-1/2 transform -translate-y-1/2 max-lg:hidden"
  //           imgUrl={btc.poster_path}
  //         />
  //       )}
  //       <MoveLeft
  //         className="absolute z-10 left-[1rem] top-[1rem]"
  //         onClick={() => {
  //           navigate(-1);
  //         }}
  //       />
  //     </div>
  //   );

  //   function BackgroundImage() {
  //     return (
  //       <img
  //         className="w-full h-auto object-cover brightness-50"
  //         src={`https://image.tmdb.org/t/p/original${detailData.backdrop_path}`}
  //         alt="background"
  //       />
  //     );
  //   }

  //   function MovieInfo() {
  //     return (
  //       <div className="text-white absolute z-10 left-10 top-1/2 transform -translate-y-1/2">
  //         <RatingTextBox className="mb-[1rem]" text={detailData.vote_average} />
  //         <h1 className=" text-[2rem] font-semibold mb-[0.5rem]">
  //           {detailData.title}
  //         </h1>
  //         <div className="font-semibold mb-[2rem]">
  //           <span className="text-[0.8rem]">{detailData.release_date}</span>
  //           <span className="text-[0.8rem] font-light mx-[0.5rem]">|</span>
  //           {genres &&
  //             genres.map((genre, index) => (
  //               <span key={index} className="text-[0.8rem]">
  //                 {genre["name"]}
  //                 {index !== genres.length - 1 && <span>·</span>}
  //               </span>
  //             ))}
  //         </div>
  //         <h1 className="text-[0.7rem] max-w-[40rem] max-md:max-w-[20rem] max-sm:hidden">
  //           {detailData.overview}
  //         </h1>
  //       </div>
  //     );
  //   }
}

interface Props {
  id: string;
}
