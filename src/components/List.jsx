import React from "react";
import Item from "./Item";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const List = () => {
	return (
		<div className="text-white h-52 relative overflow-hidden">
			<p className="p-4 text-xl"> Continue to watch </p>

			<div className="flex absolute z-10 ">
				<button
					className={`h-32 absolute  w-12 text-4xl text-white z-20 opacity-50 
						bg-black left-0 top-0 `}
				>
					<MdOutlineArrowBackIos />
				</button>
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</div>

			<button
				className={`h-32 absolute  w-12 text-4xl text-white z-20 opacity-50 bg-black right-0 bottom-4 `}
			>
				<MdOutlineArrowForwardIos />
			</button>
		</div>
	);
};

export default List;
