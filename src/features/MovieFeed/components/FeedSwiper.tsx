// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./FeedSwiper.scss";

// Import Swiper styles
import "swiper/css";
import { IMovieInfo } from "../../../interfaces/IMovieInfo.interface";
import MovieCard from "./MovieCard";

type FeedSwiperProps = { movies: IMovieInfo[] };

function FeedSwiper({ movies }: FeedSwiperProps) {
	const slides = movies.map((movieInfo) => (
		<SwiperSlide className="max-w-fit">
			<MovieCard {...movieInfo} />
		</SwiperSlide>
	));

	return (
		<Swiper
			className="mx-auto max-w-[90vw] py-16 rounded-xl feed-swiper"
			spaceBetween={32}
			slidesPerView={"auto"}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{slides}
		</Swiper>
	);
}

export default FeedSwiper;
