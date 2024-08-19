import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function MainLayout() {
	return (
		<div className="relative pb-6 w-full flex min-h-screen flex-col gap-10 pt-24">
			<Header />
			<main className="mx-auto max-w-7xl w-screen">
				<Outlet />
			</main>
		</div>
	);
}
