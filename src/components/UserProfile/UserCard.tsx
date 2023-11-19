import {User} from "@/types";
import React, {FC} from "react";
import Button, {Themes} from "@/components/UI/Button/Button";
import {useAppDispatch} from "@/redux/app/hooks";
import {useRouter} from "next/router";
import {logout} from "@/redux/features/userAuthSlice";

type Props = {
  userEditModalOpen: boolean;
  setUserEditModalOpen: (arg: boolean) => void;
  user: User;
};

const UserCard: FC<Props> = ({
	userEditModalOpen,
	setUserEditModalOpen,
	user,
}) => {
	const dispatch = useAppDispatch();
	const rounter = useRouter();
	return (
		<div className="text-white">
			<div>
				<h4 className="text-center text-4xl mb-10 font-semibold">
          Here is your profile, {user && user.firstName}!
				</h4>
				<div className="max-w-[344px] px-10 mx-auto">
					<div className="flex justify-around items-center mb-10">
						<div className="h-28 w-28 rounded-full shadow-lg shadow-white/30 bg-primary-dark-gray"></div>
						<div>
							<h5 className="text-2xl mb-4">
								{user.firstName} {user.lastName}
							</h5>
							<p className="text-primary-text-dark-gray">@someTag</p>
						</div>
					</div>
					<div className="flex justify-between">
						<Button
							theme={Themes.BLUE}
							onClick={() => setUserEditModalOpen(!userEditModalOpen)}
							className="px-12 rounded-[40px] uppercase"
						>
              Edit
						</Button>
						<Button
							onClick={() => {
								dispatch(logout());
								rounter.push("/");
							}}
							theme={Themes.RED}
							className="!px-8">
              Logout
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
