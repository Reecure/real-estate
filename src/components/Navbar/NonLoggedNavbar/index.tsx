import BlueButton from "@/components/UI/Buttons/BlueButton";
import React from "react";
import Link from "next/link";
import { Paths } from "@/constants/paths";

export const NonLoggedNavbar = () => {
  return (
    <Link href={Paths.SignIn}>
      <BlueButton>Sign in</BlueButton>
    </Link>
  );
};
