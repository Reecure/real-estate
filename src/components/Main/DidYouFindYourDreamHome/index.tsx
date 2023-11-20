import React from "react";
import {IField} from "@/types";
import ErrorText from "@/components/UI/ErrorText/ErrorText";
import {useForm} from "react-hook-form";
import Button, {Themes} from "@/components/UI/Button/Button";

const Fields: IField[] = [
	{
		id: "firstName",
		name: "firstName",
        type: "text",
		value: "First Name",

	},
	{
		id: "email",
		name: "email",
		type: "text",
		value: "Your Email",
		pattern: {
			pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: "Not valid. example@mail.com"
		}

	},
	{
		id: "phoneNumber",
		name: "phoneNumber",
		type: "text",
		value: "Phone Number",
		pattern: {
			message: "Not valid. (123)456-7890",
			pattern:  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
		}

	},
	{
		id: "interested",
		name: "interested",
		type: "text",
		value: "Interested In",

	},
];

const DidYouFindYourDreamHome = () => {

	const {register, handleSubmit, formState: {errors},} = useForm({
		defaultValues: {
			firstName: "",
			email: "",
			phoneNumber: "",
			interested: "",
			message: "",
		}
	});

    return (
		<div className="flex flex-col md:flex-row sm:justify-between md:items-center custom-padding py-20 lg:py-52">
			<div className="max-w-[610px] md:max-w-[400px] lg:max-w-[610px] ">
				<h4 className="font-bold text-5xl xl:text-[64px] leading-tight mb-4">Did You Find Your
					<span className="text-primary-blue"> Dream Home?</span>{" "}
				</h4>
				<p className=" my-5 md:my-0 text-primary-text-dark-gray text-lg md:text-xl  lg:text-2xl xl:text-[32px]">
          Thank you for getting in touch! if you find your dream home connect
          with us
				</p>
			</div>
			<form className="" onSubmit={handleSubmit((data) => {
				alert(JSON.stringify(data, null, 2));
			})}>
				<div className={"grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5"}>
					{
						Fields.map(item => (
							<label key={item.id}>
								{
									item.pattern === undefined ?
										<input
                                            // @ts-ignore
											{...register(item.name, {
												required: {value: true, message: `${item.value} is required`},
												minLength: {value: 3, message: "Min length is 3 letters"},
												maxLength: {value: 25, message: "Max length is 25 letters"}
											})}
											placeholder={item.value}
											className="bg-transparent border-b-[1px] mr-4 focus:outline-none w-full"
										/> : <input
                                            // @ts-ignore
				 							{...register(item.name, {
												required: {value: true, message: `${item.value} is required`},
												pattern: {value: item.pattern.pattern, message: item.pattern.message}
											})}
											placeholder={item.value}
											className="bg-transparent border-b-[1px] mr-4 focus:outline-none w-full"
										/>
								}
								{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
								{/*@ts-expect-error*/}
								{(errors[item.name] != null) && <ErrorText text={errors[item.name].message || "Error"} />}
							</label>
						))
					}
				</div>
				<div className="mb-16 mt-5 ">
					<label>
						<input
							{...register("message", {
								required: {value: true, message: "Message is required"},
								minLength: {value: 3, message: "Min length is 3 letters"},
								maxLength: {value: 25, message: "Max length is 25 letters"}
		 					})}
							placeholder={"Your message"}
							className="bg-transparent border-b-[1px] focus:outline-none w-full max-w-[600px]"
						/>
						{(errors.message != null) && <ErrorText text={errors.message.message || "Error"} />}
					</label>
				</div>
				<Button theme={Themes.BLUE} type={"submit"}>Submit</Button>
			</form>
		</div>
	);
};

export default DidYouFindYourDreamHome;
