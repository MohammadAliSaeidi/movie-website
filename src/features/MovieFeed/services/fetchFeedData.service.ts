import { IMovieInfo } from "../../../interfaces/IMovieInfo.interface";
import { axiosInstance } from "../../../lib/axios.config";

export async function fetchFeedData(
	abortSignal: AbortSignal
): Promise<IMovieInfo[]> {
	const apiUrl = import.meta.env.VITE_SOME_KEY_API_FETCH_FEED_DATA;
	if (apiUrl) {
		try {
			const response = await axiosInstance.get(apiUrl, {
				headers: {
					"Content-Type": "application/json",
				},
				signal: abortSignal,
			});

			const parsedToJson = await JSON.parse(response.data);

			return parsedToJson satisfies IMovieInfo[];
		} catch (error) {
			console.log(error);
			throw error;
		}
	} else {
		const environment = import.meta.env.NODE_ENV;
		if (environment !== "production") {
			console.log("api url of the fetchSubscriptionsData is null");
		}
		throw new Error("api url of the fetchSubscriptionsData is null");
	}
}
