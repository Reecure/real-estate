import { Project } from "@/types";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { fetchUser, selectUser } from "@/redux/features/getUserByIdSlice";
import {useForm} from "react-hook-form";
import Button, {Themes} from "@/components/UI/Button/Button";
import ErrorText from "@/components/UI/ErrorText/ErrorText";

type Props = {
  apart: Project;
};

const MessageToUserCard: FC<Props> = ({ apart }) => {
	const {register, handleSubmit, formState: {errors},} = useForm({
		defaultValues: {
			name: "",
			email: "",
			message: "",
		}
	});
	const { user } = useAppSelector(selectUser);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUser(apart.owner));
	}, [dispatch, apart]);

	return (
		<div className="w-full sm:max-w-[550px]">
			<article className={"flex items-center gap-5 mb-3"}>
				{
					user?.avatar === "" ?
						<div className={"w-10 h-10 rounded-full bg-neutral-400"}></div> :
						<Image src={user?.avatar} alt="avatar" className="mx-auto" />
				}

				<p className="text-xl text-center">
					{user && user.firstName} {user && user.lastName}
				</p>
			</article>

			<form className="space-y-2 flex flex-col text-xs" onSubmit={handleSubmit(data => {
				alert(JSON.stringify(data, null, 2));
			})}>
				<label className={"flex flex-col gap-1"}>
                Name
					<input
						{...register("name", {
							required: {value: true, message: "Name is required"},
							minLength: {value: 3, message: "Min length is 3 letters"},
							maxLength: {value: 25, message: "Max length is 25 letters"}
						})}
						placeholder={"Mike"}
						className="bg-primary-dark-gray rounded-lg focus:outline-none py-3 px-2"
					/>
					{(errors.name != null) && <ErrorText text={errors.name.message || "Error"} />}
				</label>
				<label className={"flex flex-col gap-1"}>
                Email
					<input
						{...register("email", {
							required: {value: true, message: "Email is required"},
							pattern: {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Not valid. example@mail.com"},
						})}
						placeholder={"example@mail.com"}
						className="bg-primary-dark-gray rounded-lg focus:outline-none py-3 px-2"
					/>
					{(errors.email != null) && <ErrorText text={errors.email.message || "Error"} />}
				</label>
				<label className={"flex flex-col gap-1"}>
                Message
					<textarea
						rows={3}
						{...register("message", {
							required: {value: true, message: "Message is required"},
							minLength: {value: 3, message: "Min length is 3 letters"},
							maxLength: {value: 25, message: "Max length is 25 letters"}
						})}
						placeholder={"Message"}
						className="bg-primary-dark-gray rounded-lg py-3 px-2 focus:outline-none resize-none"
					/>
					{(errors.message != null) && <ErrorText text={errors.message.message || "Error"} />}
				</label>
				<div className="py-8 mx-auto">
					<Button theme={Themes.BLUE} type="submit" className="max-w-[250px]">
              Send Message
					</Button>
				</div>
			</form>
		</div>
	);
};

export default MessageToUserCard;
