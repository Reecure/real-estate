import React, { FC } from "react";
import { GrClose } from "react-icons/gr";
import { CSSTransition } from "react-transition-group";

type Props = {
  isOpen: boolean;
  className?: string;
};

const RequestTableRawDotsModal: FC<Props> = ({ isOpen, className }) => {
	return (
		<CSSTransition in={isOpen} timeout={300}>
			<dialog
				open
				className={"px-4  max-w-[180px] py-2 bg-primary-dark-gray space-y-2 rounded-lg border-[1px] border-white "}
			>
				<div
					onClick={event => alert("send status close")}
					className={"flex items-center text-primary-red text-[9px] space-x-2"}
				>
					<GrClose className={"text-primary-red cursor-pointer"} />
					<p className={"cursor-pointer"}>Close</p>
				</div>
			</dialog>
		</CSSTransition>
	);
};

export default RequestTableRawDotsModal;
