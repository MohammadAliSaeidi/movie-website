import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

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
