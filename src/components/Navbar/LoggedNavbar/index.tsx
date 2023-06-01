import Link from "next/link";
import { TbBellRingingFilled } from "react-icons/tb";
import React, { FC } from "react";

type Props = {
  handleUserMenuOpen: () => void;
};

export const LoggedNavbar: FC<Props> = ({ handleUserMenuOpen }) => {
  return (
    <>
      <div className="flex items-center space-x-3">
        <Link href="/">
          <TbBellRingingFilled className="w-6 h-6 text-primary-text-dark-gray" />
        </Link>
        <div
          onClick={handleUserMenuOpen}
          className="w-10 h-10 rounded-full bg-primary-text-dark-gray  cursor-pointer"
        ></div>
      </div>
    </>
  );
};
