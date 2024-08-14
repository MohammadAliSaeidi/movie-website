import { Outlet } from "react-router-dom";
import Providers from "../Providers";

export default function Root() {
	return (
		<Providers>
			<Outlet />
		</Providers>
	);
}
