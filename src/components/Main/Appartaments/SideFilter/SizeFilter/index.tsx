import { useAppDispatch } from "@/redux/app/hooks";
import { setSize } from "@/redux/features/getAllApartmentsSlice";
import React from "react";
import SelectorForm from "../SelectorForm";

type Props = {};
const sizes = ["200+", "400+", "600+", "800+", "1000+"];

const SizeFilter = () => {
	const dispatch = useAppDispatch();
	const sizeHandler = (item: null | string) => {
		dispatch(setSize(item));
	};

	return (
		<div>
			<SelectorForm arr={sizes} title="Size" handler={sizeHandler} />
		</div>
	);
};

export default SizeFilter;
