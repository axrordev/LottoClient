import React, { useState } from "react";

export default function GameNumber() {
	const [clickedNumbers, setClickedNumbers] = useState([]);

	const handleNumberClick = (number) => {
		if (clickedNumbers.length === 5 && !clickedNumbers.includes(number)) {
			return;
		}

		if (clickedNumbers.includes(number)) {
			setClickedNumbers(clickedNumbers.filter((n) => n !== number));
		} else {
			setClickedNumbers([...clickedNumbers, number]);
		}
	};

	const handleClear = () => {
		setClickedNumbers([]);
	};

	const handleGenerate = () => {
		const numbers = [];
		while (numbers.length < 5) {
			const randomNumber = Math.floor(Math.random() * 45) + 1;
			if (!numbers.includes(randomNumber)) {
				numbers.push(randomNumber);
			}
		}
		setClickedNumbers(numbers);
	};

	return (
		<>
			<div className="max-w-7xl border rounded-md  flex">
				{/* Left side */}
				<div className="flex-1 border-r">
					<div className="w-[90%] mx-auto mt-4 mb-4">
						{/* game navbar */}
						<div className="flex justify-between items-center mb-4 ">
							<h3 className="tracking-[-0.238px] text-[24px] font-[800] text-[#111111] leading-[29px]">
								Urinish: 01
							</h3>
							<button
								className="border-2 border-[#008299] rounded-full px-[5px] py-[1px] hover:bg-[#dff8f8] "
								type="submit"
								onClick={handleGenerate}
							>
								<span className="font-[800] text-[16px] leading-[42px] text-[#008299]">
									Tezkor tanlash
								</span>
							</button>
						</div>

						{/* Game Numbers */}
						<div className="flex gap-2 font-[700] flex-wrap ">
							<div
								onClick={() => handleNumberClick(1)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(1)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										1
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(2)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(2)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										2
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(3)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(3)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										3
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(4)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(4)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										4
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(5)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(5)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										5
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(6)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(6)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										6
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(7)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(7)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										7
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(8)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(8)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										8
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(9)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(9)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										9
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(10)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(10)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										10
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(11)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(11)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										11
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(12)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(12)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										12
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(13)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(13)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										13
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(14)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(14)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										14
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(15)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(15)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										15
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(16)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(16)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										16
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(17)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(17)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
									>
										17
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(18)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(18)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										18
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(19)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(19)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										19
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(20)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(20)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										20
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(21)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(21)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										21
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(22)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(22)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										22
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(23)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(23)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										23
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(24)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(24)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										24
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(25)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(25)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										25
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(26)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(26)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										26
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(27)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(27)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										27
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(28)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(28)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										28
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(29)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(29)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										29
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(30)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(30)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										30
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(31)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(31)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										31
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(32)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(32)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										32
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(33)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(33)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										33
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(34)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(34)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										34
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(35)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(35)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										35
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(36)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(36)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										36
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(37)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(37)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										37
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(38)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(38)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										38
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(39)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(39)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										39
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(40)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(40)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										40
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(41)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(41)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										41
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(42)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(42)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										42
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(43)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(43)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										43
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(44)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(44)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										44
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick(45)}
								className={` cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(45)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0] text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										45
									</span>
								</span>
							</div>

							<div className="w-[100%] mt-2 ">
								<button
									onClick={handleClear}
									className="bg-white text-[#111] text-[16px]"
								>
									Tozalash
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Right side */}
				<div className="flex-1">
					<div className="w-[90%] mx-auto mt-7">
						<h1 className="tracking-[-0.238px] text-[24px] font-[800] text-[#111111] leading-[29px]">
							Tanlanganlar
						</h1>

						{/* bosilganlar */}
						<div className="w-[100%]  pt-2 pb-2 mt-4 bg-[#dff8f8] flex items-center font-[700] ">
							<h1 className="ml-4 mr-4 font-[800] text-[#111] ">01</h1>
							<div
								onClick={() => handleNumberClick()}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border  ${
									clickedNumbers[0]
										? "bg-[#008299] text-white"
										: "bg-white text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
									>
										{clickedNumbers[0] ? clickedNumbers[0] : "?"}
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick()}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers[1]
										? "bg-[#008299] text-white"
										: "bg-white text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										{clickedNumbers[1] ? clickedNumbers[1] : "?"}
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick()}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers[2]
										? "bg-[#008299] text-white"
										: "bg-white text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										{clickedNumbers[2] ? clickedNumbers[2] : "?"}
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick()}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers[3]
										? "bg-[#008299] text-white"
										: "bg-white text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
									>
										{clickedNumbers[3] ? clickedNumbers[3] : "?"}
									</span>
								</span>
							</div>

							<div
								onClick={() => handleNumberClick()}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border  ${
									clickedNumbers[4]
										? "bg-[#008299] text-white"
										: "bg-white text-black"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
										} `}
									>
										{clickedNumbers[4] ? clickedNumbers[4] : "?"}
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
