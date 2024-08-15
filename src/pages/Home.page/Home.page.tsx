import { useEffect } from "react";
import FeedSwiper from "../../features/MovieFeed/components/FeedSwiper";
import MovieCard from "../../features/MovieFeed/components/MovieCard";
import { fetchFeedData } from "../../features/MovieFeed/services/fetchFeedData.service";
import { useMutation } from "@tanstack/react-query";

export default function Home() {
	const moviesMutation = useMutation({
		mutationKey: ["movies"],
		mutationFn: () => {
			const abortController = new AbortController();
			return fetchFeedData(abortController.signal);
		},
	});

	useEffect(() => {
		moviesMutation.mutate();
	}, []);

	const movieCards = moviesMutation.data?.map((data) => (
		<MovieCard key={data.id} {...data} />
	));

	return (
		<div className="[&>section]:mt-10">
			<section className="grid w-fit h- mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16">
				{movieCards}
			</section>
			<section>
				<h2>swiper</h2>
				<FeedSwiper movies={moviesMutation.data} />
			</section>
		</div>
	);
}
