import React, {FC, useEffect, useState} from "react";
import {User} from "@/types";
import {useForm} from "react-hook-form";
import ErrorText from "@/components/UI/ErrorText/ErrorText";
import Button, {Themes} from "@/components/UI/Button/Button";
import Modal from "@/components/UI/Modal/Modal";
import DeleteForm from "@/components/Forms/DeleteForm/DeleteForm";

type Props = {
    user: User;
};

const INPUT_STYLE = "w-full py-3 px-2 bg-[#0E0E0E] rounded-lg";


const ProfileForm: FC<Props> = ({
	user,
}) => {
	const [deleteOpen, setDeleteOpen] = useState(false);

	const {register, handleSubmit, control, formState: {errors}} = useForm({defaultValues: {
		firstName: "",
		lastName: "",
		email: "",
		currentPassword: "",
		newPassword: "",
		confirmNewPassword: "",
	}});

	useEffect(() => {
		if (deleteOpen) {
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
			document.body.scrollTop = 0;
		} else {
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [deleteOpen]);

	const deleteOpenHandler = () => {
		setDeleteOpen(prev => !prev);
	};

	return (
		<>
			<form onSubmit={handleSubmit((data) => {
				alert(JSON.stringify(data, null, 2));
			})}
			className={"max-w-[450px] w-full"}
			>
				<div className="flex flex-col sm:flex-row items-center sm:mb-10">
					<div className="mr-10">
						<div className="w-28 h-28 rounded-full bg-slate-600"></div>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="firstName" className="mb-1 text-[12px]">
                            Firstname
							<input {...register("firstName", {
								required: {value: true, message: "Firstname is required"}
							})}
							type="text"
							placeholder={user.firstName}
							className={INPUT_STYLE}
							/>
							{(errors.firstName != null) && <ErrorText text={errors.firstName.message || "Error"} />}
						</label>
						<label htmlFor="lastName" className="mb-1 text-[12px]">
                            Lastname
							<input {...register("lastName", {
								required: {value: true, message: "Lastname is required"}
							})}
							type="text"
							placeholder={user.lastName}
							className={INPUT_STYLE}
							/>
							{(errors.lastName != null) && <ErrorText text={errors.lastName.message || "Error"} />}
						</label>
					</div>
				</div>
				<div className="mb-10">
					<label htmlFor="email" className="mb-1 text-[12px]">
                        Email
						<input {...register("email", {
							required: {value: true, message: "Lastname is required"}
						})}
						type="email"
						placeholder={user.lastName}
						className={INPUT_STYLE}
						/>
						{(errors.email != null) && <ErrorText text={errors.email.message || "Error"} />}
					</label>
					<label htmlFor="currentPassword" className="mb-1 text-[12px]">
                        Current Password
						<input {...register("currentPassword", )}
							type="password"
							placeholder={"*********"}
							className={INPUT_STYLE}
						/>
						{(errors.currentPassword != null) && <ErrorText text={errors.currentPassword.message || "Error"} />}
					</label>
					<label htmlFor="newPassword" className="mb-1 text-[12px]">
                        New Password
						<input {...register("newPassword", )}
							type="password"
							className={INPUT_STYLE}
						/>
						{(errors.newPassword != null) && <ErrorText text={errors.newPassword.message || "Error"} />}
					</label>
					<label htmlFor="confirmNewPassword" className="mb-1 text-[12px]">
                        Confirm New Password
						<input {...register("confirmNewPassword", )}
							type="password"
							className={INPUT_STYLE}
						/>
						{(errors.confirmNewPassword != null) && <ErrorText text={errors.confirmNewPassword.message || "Error"} />}
					</label>
				</div>
				<div className="flex justify-between gap-4">
					<Button theme={Themes.BLUE}
						type="button"
						onClick={deleteOpenHandler}
					> Delete account
					</Button>
					<Button theme={Themes.GRADIENT} type="submit">Save</Button>
				</div>

			</form>
			<Modal setIsOpen={deleteOpenHandler} isOpen={deleteOpen}>
				<DeleteForm
					text={"This action can not be undone. We highly recommend to export your account"}
					setDeleteOpen={deleteOpenHandler}
				/>
			</Modal>
		</>
	);
};
export default ProfileForm;