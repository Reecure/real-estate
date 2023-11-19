import { useAppDispatch } from "@/redux/app/hooks";
import { setBedrooms } from "@/redux/features/getAllApartmentsSlice";
import React from "react";
import SelectorForm from "../SelectorForm";

type Props = {};

const bedrooms = ["1+", "2+", "3+", "4+", "5+"];

const BedroomsFilter = (props: Props) => {
	const dispatch = useAppDispatch();
	const bedroomsHandler = (item: null | string) => {
		dispatch(setBedrooms(item));
	};
	return (
		<div>
			<SelectorForm arr={bedrooms} title="Bedrooms" handler={bedroomsHandler} />
		</div>
	);
};

export default BedroomsFilter;
