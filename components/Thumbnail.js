import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50 "
    >
      <Image
        width={1920}
        height={1080}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path} ` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout="responsive"
        alt="Image N/A"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>

        <h2 className="mt-1 text-2xl text-white transition-all duration-200 ease-in-out group-hover:font-bold">
          {result.title || result.orignal_title}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100 ">
          {result.media_type && `${result.media_type}`} {""}
          {result.release_date || `${result.release_date}`} {""}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});
Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;
