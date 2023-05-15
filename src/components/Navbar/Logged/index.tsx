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
  userMenuOpen,
  handleUserMenuOpen,
}) => {
  return (
    <>
      {logged ? (
        <LoggedNavbar
          userMenuOpen={userMenuOpen}
          handleUserMenuOpen={handleUserMenuOpen}
        />
      ) : (
        <NonLoggedNavbar />
      )}
    </>
  );
};
