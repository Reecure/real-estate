import { User } from "@/types";
import React, { FC } from "react";
import BlueButton from "../UI/Buttons/BlueButton";
import RedButton from "../UI/Buttons/RedButton";

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
              <p className="text-primary-text-dark-gray">@sometag</p>
            </div>
          </div>
          <div className="flex justify-between">
            <BlueButton
              onClick={() => setUserEditModalOpen(!userEditModalOpen)}
              className="px-12 rounded-[40px] uppercase"
            >
              Edit
            </BlueButton>
            <RedButton className="px-8 rounded-[40px] uppercase">
              Logout
            </RedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
