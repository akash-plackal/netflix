import React, { useRef } from "react";
import Item from "./Item";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const List = () => {
	const itemRef = useRef();

	const handleClick = (str) => {
		const distance = itemRef.current.getBoundingClientRect().x;

		if (str === "right") {
			itemRef.current.style.transform = `translateX(${216 + distance}px)`;
		}
		if (str === "left") {
			itemRef.current.style.transform = `translateX(${
				-216 + distance
			}px)`;
		}
	};

	return (
		<div className="text-white h-52 relative overflow-hidden transition-all">
			<p className="p-4 text-xl"> Continue to watch </p>

			<button
				className={`h-32 absolute  w-12 text-4xl text-white z-20 opacity-50 
						bg-black left-0 `}
				onClick={() => handleClick("left")}
			>
				<MdOutlineArrowBackIos />
			</button>

			<div ref={itemRef} className="flex absolute z-10 ">
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
				className={`h-32 absolute  w-12 text-4xl text-white z-20 opacity-50 bg-black right-0 `}
				onClick={() => handleClick("right")}
			>
				<MdOutlineArrowForwardIos />
			</button>
		</div>
	);
};

export default List;
