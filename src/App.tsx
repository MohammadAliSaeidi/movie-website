import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

function App() {
	return (
		<>
			<Suspense fallback={<div>loading...</div>}>
				<RouterProvider router={router} />
			</Suspense>
		</>
	);
}

export default App;
