import Link from "next/link";
import React, {useEffect, useRef} from "react";
import { Paths } from "@/constants/paths";
import {useRouter} from "next/router";
import {useAppDispatch} from "@/redux/app/hooks";
import {logout} from "@/redux/features/userAuthSlice";

interface Actions {
  name: string;
  path: Paths;
}

const Actions: Actions[] = [
	{
		name: "Account",
		path: Paths.UserProfile,
	},
	{
		name: "New Project",
		path: Paths.NewProject,
	},
	{
		name: "Dashboards",
		path: Paths.UserProfileDashboard,
	},
];

type Props = {
    setUserMenuOpen: () => void
};

const UserActions = (props: Props) => {
	const {setUserMenuOpen} = props;

	const dispatch = useAppDispatch();
	const rounter = useRouter();

	return (
		<div className="flex flex-col p-3 bg-primary-dark-gray rounded-lg space-y-2">
			{Actions.map((item) => {
				return (
					<Link onClick={setUserMenuOpen} key={item.name} href={item.path}>
						{item.name}
					</Link>
				);
			})}
			<button className="cursor-pointer text-left" onClick={() => {
				dispatch(logout());
				setUserMenuOpen();
				rounter.push("/");
			}}>Log out</button>
		</div>
		
	);
};

export default UserActions;
