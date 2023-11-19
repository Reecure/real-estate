import React, {FC, useState} from "react";
import Button, {Themes} from "@/components/UI/Button/Button";

type Props = {
  deleteOpen: boolean;
  setDeleteOpen: (arg: boolean) => void;
  className?: string;
};

const DeleteProfileForm: FC<Props> = ({
	deleteOpen,
	setDeleteOpen,
	className,
}) => {
	const [confirmDelete, setConfirmDelete] = useState(false);

	return (
		<div
			className={`${className} max-w-[559px] p-10 rounded-[24px] shadow-xl shadow-white/30 text-white bg-[#0A0A0A] z-[100]`}
		>
			<div className="flex mb-5 sm:mb-10">
				<div className="w-full">
					<h4 className="text-xl text-[36px]">Delete Account</h4>
				</div>
				<div className="">
					<button className="text-xl" onClick={() => setDeleteOpen(false)}>
              x
					</button>
				</div>
			</div>

			<p className="mb-6">
          This action can not be undone. We highly recommend to export your
          account
			</p>
			<div className="mb-10 ">
				<label className="custom-checkbox">
            Confirm account deletion
					<input
						type="checkbox"
						name="confirmDelete"
						onChange={(e) => {
							setConfirmDelete(e.currentTarget.checked);
						}}
					/>
					<span className="checkmark"></span>
				</label>
			</div>
			<div className="flex justify-between space-x-2 sm:space-x-0 ">
				<Button
					theme={Themes.RED}
					disabled={!confirmDelete}
					onClick={() => {
						alert("Account success deleted");
					}}
					className="!whitespace-nowrap bg-red-400 disabled:bg-red-400/25 disabled:text-white/25"
				>
            Delete account
				</Button>
				<div className="flex flex-col items-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5">
					<Button
						theme={Themes.BLACK}
						onClick={() => {
							setDeleteOpen(!deleteOpen);
						}}
						className=""
					>
              Cancel
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DeleteProfileForm;
