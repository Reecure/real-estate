import { LoggedNavbar } from "@/components/Navbar/LoggedNavbar";
import { NonLoggedNavbar } from "@/components/Navbar/NonLoggedNavbar";
import React, { FC } from "react";

type Props = {
  logged: boolean;
  userMenuOpen: boolean;
  handleUserMenuOpen: () => void;
};
export const Logged: FC<Props> = ({
	logged,

	handleUserMenuOpen,
}) => {
	return (
		<>
			{logged ? (
				<LoggedNavbar handleUserMenuOpen={handleUserMenuOpen} />
			) : (
				<NonLoggedNavbar />
			)}
		</>
	);
};
