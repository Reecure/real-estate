import Image from "next/image";

import React from "react";
import logo from "../../../../public/logo.png";
import GradientButton from "@/components/UI/Button/GradientButton";
import Container from "../../UI/Container";
import { IField } from "@/types";
import {useForm} from "react-hook-form";
import Button, {Themes} from "@/components/UI/Button/Button";

const Fields: IField[] = [
	{
		name: "firstName",
		id: "firstName",
		type: "text",
		value: "FirstName",
	},
	{
		name: "lastName",
		id: "lastName",
		type: "text",
		value: "LastName",
	},
	{
		name: "email",
		id: "email",
		type: "email",
		value: "Email",
	},
	{
		name: "phoneNumber",
		id: "phoneNumber",
		type: "text",
		value: "Phone number",
	},
];

const Properties: IField[] = [
	{
		name: "traditional",
		id: "traditional",
		value: "Traditionality",
		type: "checkbox",
	},
	{
		name: "crypto",
		id: "crypto",
		value: "Via Crypto",
		type: "checkbox",
	},
	{
		name: "nft",
		id: "nft",
		value: "As an NFT",
		type: "checkbox",
	},
	{
		name: "fraction",
		id: "fraction",
		value: "Real Estate fraction",
		type: "checkbox",
	},
];

const Agent: IField[] = [
	{
		name: "haveAgentYes",
		id: "haveAgentYes",
		value: "Yes",
		type: "checkbox",
	},
	{
		name: "haveAgentNo",
		id: "haveAgentNo",
		value: "No",
		type: "checkbox",
	},
	{
		name: "wantAgent",
		id: "wantAgent",
		value: "I would like find an agent on homverse.io",
		type: "checkbox",
	},
];

const Budget: IField[] = [
	{
		name: "budget",
		id: "1",
		value: "Below $50K",
		type: "radio",
	},
	{
		name: "budget",
		id: "2",
		value: "$50K - $200K",
		type: "radio",
	},
	{
		name: "budget",
		id: "3",
		value: "$200K - $800K",
		type: "radio",
	},
	{
		name: "budget",
		id: "4",
		value: "$800K - $3M",
		type: "radio",
	},
	{
		name: "budget",
		id: "5",
		value: "Above $3M",
		type: "radio",
	},
];

const CreateAccount = () => {
	const {register, handleSubmit, formState: {errors},} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			traditional: "",
			crypto: "",
			nft: "",
			fraction: "",
			haveAgentYes: "",
			haveAgentNo: "",
			wantAgent: "",
			budget: "",
		}
	});

	return (
		<Container
			className={"my-20 text-white max-w-[560px] bg-primary-dark-gray p-5 rounded-2xl"}
		>
			<div className={"flex justify-center"}>
				<Image quality={100} width={163} height={110} src={logo} alt="logo" />
			</div>

			<h2
				className={"text-center text-2xl sm:text-4xl py-10 whitespace-nowrap font-semibold"}
			>
        Create your Account
			</h2>
			<form>
				<div>
					{Fields.map((field) => {
						return (
							<div key={field.id}>
								<label
									className={"uppercase text-[9px] tracking-[2px]"}
									htmlFor={field.name}
								>
									{field.value}
								</label>
								<input
									className={"custom-field"}
									name={field.name}
									type={field.type}
								/>
							</div>
						);
					})}
					<div className="flex flex-col items-start space-y-2">
						<p className={"uppercase text-md tracking-[2px]"}>
                i want buy a property
						</p>
						{Properties.map((prop) => {
							return (
								<div key={prop.id}>
									<label className="custom-checkbox">
										{prop.value}
										<input type={prop.type} name={prop.name} />
										<span className="checkmark"></span>
									</label>
								</div>
							);
						})}
					</div>
					<div className="flex flex-col items-start space-y-2">
						<p className={"uppercase text-md tracking-[2px]"}>
                Do you have an Agent ?
						</p>
						{Agent.map((agent) => {
							return (
								<div key={agent.id}>
									<label className="custom-checkbox">
										{agent.value}
										<input type={agent.type} name={agent.name} />
										<span className="checkmark"></span>
									</label>
								</div>
							);
						})}
					</div>
					<div className="flex flex-col items-start">
						<div className={"py-4"}>
							<p className={"uppercase text-md tracking-[2px]"}>
                  What’s your budget ?
							</p>
						</div>
						{Budget.map((budget) => {
							return (
								<div key={budget.id}>
									<label
										className="custom-radio-button"
										htmlFor={budget.name}
									>
										{budget.value}
										<input
											type={budget.type}
											name={budget.name}
											value={budget.value}
										/>
										<span className="checkmark"></span>
									</label>
								</div>
							);
						})}
					</div>
				</div>
				<div className={"flex justify-center py-14"}>
					<Button theme={Themes.GRADIENT} className="rounded-[30px] !px-14 py-2">
              SUBMIT
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default CreateAccount;
