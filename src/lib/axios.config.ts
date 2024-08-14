import { Axios } from "axios";

export const axiosInstance = new Axios({
	baseURL: import.meta.env.API_BASE_URL,
});
