import ImageWithSkeleton from "../../../components/Image";
import { IMovieInfo } from "../../../interfaces/IMovieInfo.interface";
import { Star } from "lucide-react";

type MovieCardProps = {} & Partial<IMovieInfo>;

export default function MovieCard({
	Genre,
	Poster,
	Title,
	Rating,
	Year,
}: MovieCardProps) {
	const genres = Genre?.split(", ").map((genre) => (
		<div
			key={genre}
			className="px-2 py-1 flex-nowrap min-w-fit bg-slate-950/[0.1] dark:bg-slate-50/[.10] text-xs font-light w-fit rounded-full"
		>
			{genre}
		</div>
	));

	return (
		<div className="flex flex-1 select-none flex-col relative z-10 w-64 sm:w-56 md:w-54 lg:w-48 cursor-pointer overflow-hidden card-with-hover hover:scale-105 ease-out transition-all duration-300 hover:shadow-black/15 hover:shadow-xl shadow-sm">
			<ImageWithSkeleton
				className="object-cover"
				containerClassName="h-[350px] sm:h-80 md:h-72 lg:h-64"
				src={Poster}
				loading="eager"
				alt={Title + " thumbnail"}
			/>
			<div className="flex flex-col gap- px-1.5 py-2">
				<div className="flex gap-2">
					<div className="flex gap-1">
						<Star className={"w-5 fill-yellow-500"} /> {Rating}
					</div>
					<span className="text-slate-50/20">|</span>
					<div>{Year}</div>
				</div>
				<span className="text-lg truncate">{Title}</span>
				<div className="flex gap-1 flex-wrap mt-3 gap-y-2">
					{genres}
				</div>
			</div>
		</div>
	);
}
