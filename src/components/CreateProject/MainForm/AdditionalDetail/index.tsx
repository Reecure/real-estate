import React, { FC } from "react";
import { IField } from "@/types";
import { FieldTemplate } from "@/components/Templates/FieldTemplate";
import { CSSTransition } from "react-transition-group";
import s from "./AdditionalDetail.module.css";
import {useFormContext} from "react-hook-form";
import ErrorText from "@/components/UI/ErrorText/ErrorText";

const Fields: IField[] = [
	{
		value: "Accepted Currencies",
		id: "acceptedCurrencies",
		name: "acceptedCurrencies",
		type: "text",
	},
	{
		value: "Size",
		id: "size",
		name: "size",
		type: "text",
	},
	{
		value: "Bedrooms",
		id: "bedrooms",
		name: "bedrooms",
		type: "text",
	},
	{
		value: "Year Built",
		id: "yearBuilt",
		name: "yearBuilt",
		type: "text",
	},
	{
		value: "Bathrooms",
		id: "bathrooms",
		name: "bathrooms",
		type: "text",
	},
	{
		value: "Floors",
		id: "floors",
		name: "floors",
		type: "text",
	},
];

const BigFields: IField[] = [
	{
		value: "Description",
		type: "text",
		as: "textarea",
		id: "description",
		name: "description",
	},
	{
		value: "Agent Remarks",
		type: "text",
		as: "textarea",
		id: "agentRemarks",
		name: "agentRemarks",
	},
];

type Props = {
  isOpen: boolean;
};

const AdditionalDetail: FC<Props> = ({ isOpen }) => {
	const {register, control, formState: {errors}} = useFormContext();
	return (
		<CSSTransition
			in={isOpen}
			timeout={500}
			classNames={{
				enterActive: s.additionalShow,
				exitActive: s.additionalExit,
			}}
			mountOnEnter
			unmountOnExit
		>
			<div>
				<h5 className="text-2xl font-semibold pb-10">Features</h5>
				<div className={"grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2"}>
					{Fields.map((item, i) => {

						return <label key={item.id} className={"flex flex-col gap-[2px]"}>
							<p className={"text-[10px] uppercase tracking-[3px]"}>{item.value}</p>
							<input
								{...register(item.name, {
									required: {value: true, message: `${item.value} is required`},
								})}
								className="bg-primary-dark-gray rounded-lg focus:outline-none py-1 px-2"
							/>
							{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
							{/*@ts-expect-error*/}
							{(errors[item.name] != null) && <ErrorText text={errors[item.name].message || "Error"} />}
						</label>;
					})}
				</div>
				<div className={"flex flex-col gap-y-2 mt-5"}>
					{BigFields.map((item) => {
						return <label key={item.id} className={"flex flex-col gap-[2px]"}>
							<p className={"text-[10px] uppercase tracking-[3px]"}>{item.value}</p>
							<textarea
								rows={4}
								{...register(item.name)}
								className="bg-primary-dark-gray rounded-lg focus:outline-none py-1 px-2 resize-none"
							/>
						</label>;
					})}
				</div>
				<label className={"flex flex-col gap-[2px] mb-10 mt-3"}>
					<p className={"text-[10px] uppercase tracking-[3px]"}>Video link</p>
					<input
						{...register("videoLink")}
						className="bg-primary-dark-gray rounded-lg focus:outline-none py-1 px-2 resize-none"
					/>
				</label>
			</div>
		</CSSTransition>
	);
};

export default AdditionalDetail;
