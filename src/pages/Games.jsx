import { useNavigate } from "react-router";

export default function Games() {
	const navigate = useNavigate()

	return (
		<div className="max-w-6xl  h-[400px] mt-10 flex gap-4">
			<div className="w-[200px] h-[200px] rounded-md    bg-red-500">
				<h1 className="mt-8 font-[800] text-2xl text-center text-[#111]">
					Raqam Tanla
				</h1>
				<button onClick={() => (navigate("/"))} className="bg-transparent border-2 px-4 ml-12 mt-8 border-black rounded-2xl p-1 font-bold text-[#111] hover:bg-red-600">
					O'ynash
				</button>
			</div>

			<div className="w-[200px] h-[200px] rounded-md    bg-blue-500">
				<h1 className="mt-8 font-[800] text-2xl text-center text-[#111]">
					Futbol O'yini
				</h1>
				<button onClick={() => (navigate("/football"))} className="bg-transparent border-2 px-4 ml-12 mt-8 border-black rounded-2xl p-1 font-bold text-[#111] hover:bg-blue-600">
					O'ynash
				</button>
			</div>
		</div>
	);
}
