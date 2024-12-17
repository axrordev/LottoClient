import React from "react";
import GameNumber from "../components/GameNumber";
import { useNavigate } from "react-router";

export default function Home() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="flex justify-between bg-[#dff8f8]">
				<div className="font-[800]">Reklama</div>
				<div className="flex flex-col m-2 text-[#111] font-[800] ">
					<span className="text-[16px]"> Bugungi Yutuq</span>
					<span
						className="ml-[-40px] text-[35px] font-[700] "
						style={{ fontFamily: "'Druk Text', Georgia, serif" }}
					>
						30,000 so'm
					</span>
					<span className=" ml-2">3 kishi uchun</span>
				</div>
			</div>

			<div className="mt-2 mb-2" onClick={() => navigate("/games")}>
				<span className="  cursor-pointer bg-transparent hover:text-[#008299] hover:text-[17px]">
					Boshqa o'yinlar
				</span>
			</div>

			<GameNumber />
		</div>
	);
}
