import FeedSwiper from "../../features/MovieFeed/components/FeedSwiper";
import MovieCard from "../../features/MovieFeed/components/MovieCard";
import { IMovieInfo } from "../../interfaces/IMovieInfo.interface";

export default function Home() {
	const movieCards = Array.from({ length: 14 }).map((_, index) => (
		<MovieCard
			key={index}
			actors="ali saeidi#fateme saeidi#sina heydari#meysam nazari"
			coverImgUrl="https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg"
			description="a great movie with great actors. great story. great action. great idea. great lessons. lorem ipsum dolor sit amet con laore magna al"
			director="Christopher Nolan"
			genre="Science fiction"
			rating={8.8}
			title="Inception"
			year="2010"
		/>
	));

	const mockMoviesInfo: IMovieInfo[] = Array.from({ length: 12 }).map(() => ({
		actors: "ali saeidi#fateme saeidi#sina heydari#meysam nazari",
		coverImgUrl:
			"https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
		description:
			"a great movie with great actors. great story. great action. great idea. great lessons. lorem ipsum dolor sit amet con laore magna al",
		director: "Christopher Nolan",
		genre: "Science fiction",
		rating: 8.8,
		title: "Inception",
		year: "2010",
	}));

	return (
		<div>
			<section className="grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16">
				{movieCards}
			</section>
			<h2>swiper</h2>
			<FeedSwiper movies={mockMoviesInfo} />
		</div>
	);
}
