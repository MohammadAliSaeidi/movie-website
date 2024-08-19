import Root from "./components/Root";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home.page"));
// const Admin = lazy(() => import("./pages/Admin.page"));
const Login = lazy(() => import("./pages/Login.page"));
const AdminLayout = lazy(
	() => import("./features/Admin/components/AdminLayout")
);
const AdminDashboard = lazy(() => import("./pages/AdminDashboard.page"));
const AdminMoviesManager = lazy(
	() => import("./pages/AdminMoviesManager.page")
);
const AdminAddMovie = lazy(() => import("./pages/AdminAddMovie.page"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <MainLayout />,
				children: [{ path: "", element: <Home /> }],
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "admin",
				element: <AdminLayout />,
				children: [
					{ path: "", element: <AdminDashboard /> },
					{ path: "movies", element: <AdminMoviesManager /> },
					{ path: "add-movie", element: <AdminAddMovie /> },
				],
			},
		],
	},
]);
