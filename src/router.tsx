import Root from "./components/Root";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Home from "./pages/Home.page/Home.page";
import MainLayout from "./components/MainLayout";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="" element={<MainLayout />}>
				<Route path="" element={<Home />}></Route>
			</Route>
		</Route>
	)
);
