import { IFeedData } from "../../../interfaces/IFeedData.interface";
import { axiosInstance } from "../../../lib/axios.config";

export async function fetchAllSubscriptionsData(
	abortSignal: AbortSignal
): Promise<IFeedData> {
	const apiUrl = import.meta.env.VITE_SOME_KEY_API_FETCH_FEED_DATA;
	if (apiUrl) {
		try {
			const response = await axiosInstance.post(apiUrl, null, {
				headers: {
					"Content-Type": "application/json",
				},
				signal: abortSignal,
			});

			return response.data;
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
