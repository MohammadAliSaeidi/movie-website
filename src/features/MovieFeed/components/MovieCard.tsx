import ImageWithSkeleton from "../../../components/Image";
import StarIcon from "../../../assets/icons/star.svg?react";
import { IMovieInfo } from "../../../interfaces/IMovieInfo.interface";

type MovieCardProps = {} & IMovieInfo;

export default function MovieCard({
	coverImgUrl,
	genre,
	rating,
	year,
	title,
}: MovieCardProps) {
	return (
		<div className="flex flex-col relative z-10 w-64 sm:w-56 md:w-54 lg:w-48 cursor-pointer overflow-hidden card hover:scale-105 ease-out transition-all duration-300 hover:shadow-black/15 hover:shadow-xl shadow-sm">
			<ImageWithSkeleton
				className="object-cover"
				containerClassName="h-[350px] sm:h-80 md:h-72 lg:h-64"
				src={coverImgUrl}
				loading="lazy"
				alt={title + " thumbnail"}
			/>
			<div className="flex flex-col gap- px-1.5 py-2">
				<div className="flex gap-2">
					<div className="flex gap-1">
						<StarIcon className={"w-5 fill-yellow-500"} /> {rating}
					</div>
					<span className="text-slate-50/20">|</span>
					<div>{year}</div>
				</div>
				<span className="text-lg truncate">{title}</span>
				<div className="px-2 py-1 bg-slate-950/[0.1] dark:bg-slate-50/[.10] text-xs font-light w-fit rounded-full mt-3">
					{genre}
				</div>
				<button></button>
			</div>
		</div>
	);
}
