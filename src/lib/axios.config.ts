import { Axios } from "axios";

const baseUrl = "http://37.32.8.190";

export const axiosInstance = new Axios({
	baseURL: baseUrl,
});
