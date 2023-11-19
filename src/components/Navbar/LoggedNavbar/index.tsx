import React, { FC } from "react";

type Props = {
  handleUserMenuOpen: () => void;
};

export const LoggedNavbar: FC<Props> = ({ handleUserMenuOpen }) => {
	return (
		<>
			<div
				onClick={handleUserMenuOpen}
				className="w-10 h-10 rounded-full bg-primary-text-dark-gray cursor-pointer"
			>
			</div>
		</>
	);
};
