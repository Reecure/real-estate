import React from "react";
import { IField } from "@/types";
import {useFormContext} from "react-hook-form";
import ErrorText from "@/components/UI/ErrorText/ErrorText";

const Fields: IField[] = [
	{
		name: "mlsNumber",
		value: "Mls Number",
		id: "mlsNumber",
		type: "text",
	},
	{
		value: "Address",
		name: "address",
		id: "address",
		type: "text",
	},
	{
		value: "Price",
		name: "price",
		id: "price",
		type: "text",
	},
	{
		value: "Neighbourhood",
		name: "neighbourhood",
		id: "neighbourhood",
		type: "text",
	},
	{
		value: "Property Type",
		name: "propertyType",
		id: "propertyType",
		type: "text",
	},
];

type Props = {};

const MainInfo = (props: Props) => {
	const {register, formState: {errors}} = useFormContext();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 w-full mb-5">
			{Fields.map((item) => {
				return <label key={item.id} className={"flex flex-col gap-[2px]"}>
					<p className={"text-[10px] uppercase tracking-[3px]"}>{item.value}</p>
					<input
						{...register(item.name, {
							required: {value: true, message: `${item.value} is required`},
							minLength: {value: 3, message: "Min length is 3 letters"},
							maxLength: {value: 25, message: "Max length is 25 letters"}
						})}
						type={item.type}
						className="bg-primary-dark-gray rounded-lg focus:outline-none py-1 px-2"
					/>
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/*@ts-expect-error*/}
					{(errors[item.name] != null) && <ErrorText text={errors[item.name].message || "Error"} />}
				</label>;

			})}
		</div>
	);
};

export default MainInfo;
