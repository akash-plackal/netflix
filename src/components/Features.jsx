import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Features = () => {
	return (
		<div className="h-2/6 py-4 text-white w-3/12 absolute left-5 bottom-12 flex flex-col justify-between ">
			<div className="flex justify-start text-xl">
				<button className="w-24 h-10 m-3  rounded bg-white text-black text-center flex items-center justify-between px-4">
					<BsFillPlayFill className="text-xl" /> <span>Play</span>
				</button>

				<button className="w-24 h-10 m-3 rounded bg-slate-500 text-white text-center">
					Info
				</button>
			</div>
		</div>
	);
};

export default Features;
