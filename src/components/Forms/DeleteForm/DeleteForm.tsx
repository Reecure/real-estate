import React, {FC, useState} from "react";
import Button, {Themes} from "@/components/UI/Button/Button";

interface Props {
    text: string
    setDeleteOpen: () => void
}

const DeleteForm: FC<Props> = ({setDeleteOpen, text}) => {
	const [confirmDelete, setConfirmDelete] = useState(false);

	return (
		<div
			className={"max-w-[559px] z-[100]"}
		>
			<div className="flex mb-3 sm:mb-5">
				<div className="w-full">
					<h4 className="text-xl text-[36px]">Delete Account</h4>
				</div>
				<div className="">
					<button className="text-xl" onClick={setDeleteOpen}>
                        x
					</button>
				</div>
			</div>
			<p className="mb-3">
				{text}
			</p>
			<div className="mb-10 ">
				<label className="custom-checkbox">
                    Confirm
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
						alert("Delete send");
					}}
					className="!whitespace-nowrap bg-red-400 disabled:bg-red-400/25 disabled:text-white/25"
				>
                    Delete
				</Button>
				<div className="flex flex-col items-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5">
					<Button
						theme={Themes.BLACK}
						onClick={setDeleteOpen}
						className=""
					>
                        Cancel
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DeleteForm;