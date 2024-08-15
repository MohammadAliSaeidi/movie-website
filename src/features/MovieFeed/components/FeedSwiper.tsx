import "./FeedSwiper.scss";
import { IMovieInfo } from "../../../interfaces/IMovieInfo.interface";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type FeedSwiperProps = { movies?: IMovieInfo[] };

function FeedSwiper({ movies }: FeedSwiperProps) {
	if (movies === undefined) {
		return null;
	}

	const slides = movies?.map((movieInfo) => (
		<SwiperSlide key={movieInfo.id} className="max-w-fit">
			<MovieCard {...movieInfo} />
		</SwiperSlide>
	));

	return (
		<Swiper
			className="mx-auto max-w-[90vw] pb-16 pt-10 px-4 rounded-xl feed-swiper"
			spaceBetween={32}
			slidesPerView={"auto"}
			navigation
			modules={[Navigation]}
		>
			{slides}
		</Swiper>
	);
}

export default FeedSwiper;
