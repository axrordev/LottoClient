import { NavLink, Outlet } from "react-router-dom";
import img from "../img/logo.png";

export default function () {
	return (
		<div className="">
			<div className="border-b-2 shadow-sm sticky top-0 bg-white">
				<nav className="max-w-6xl m-auto flex  space-x-8 items-center  h-[65px] text-[15px] font-bold font-nav text-[#767676] ">
					<NavLink>
						<img className="h-[100px] min-w-[100px]" src={img} alt="img" />
					</NavLink>
					<NavLink className="min-w-[90px]" to="/">Bosh sahifa</NavLink>
					<NavLink to="/games">O'yinlar</NavLink>
					<NavLink to="/results">Natijalar</NavLink>
					<NavLink to="/winners">G'oliblar</NavLink>
					<NavLink to="/about">Batafsil</NavLink>
					<div className=" w-full flex justify-end  pr-2">
						<NavLink className="border-2 rounded-full p-2 hover:bg-blue-700 hover:text-white " to="/log-in">Kirish</NavLink>
					</div>
				</nav>
			</div>

			<main className="max-w-6xl m-auto">
				<Outlet />
			</main>
		</div>
	);
}
