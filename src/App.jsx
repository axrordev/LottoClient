import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Results from "./pages/Results";
import Winners from "./pages/Winners";
import Games from "./pages/Games";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import GameFootboll from "./pages/GameFootball";
// import AdminPanel from "./adminPanel/AdminPanel";
import AdminDashboard from "./adminPanel/AdminDashboard";

function App() {
	const routes = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="games" element={<Games />} />
				<Route path="results" element={<Results />} />
				<Route path="winners" element={<Winners />} />
				<Route path="about" element={<About />} />
				<Route path="log-in" element={<LogIn />} />
				<Route path="football" element={<GameFootboll />} />
				<Route path="admin" element={<AdminDashboard />} />
			</Route>,
		),
	);

	return (
		<div className="App">
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
