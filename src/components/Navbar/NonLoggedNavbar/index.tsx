import React from "react";
import Link from "next/link";
import {Paths} from "@/constants/paths";
import Button, {Themes} from "@/components/UI/Button/Button";

export const NonLoggedNavbar = () => {
	return (
		<Link href={Paths.SignIn}>
			<Button theme={Themes.BLUE}>Sign in</Button>
		</Link>
	);
};
