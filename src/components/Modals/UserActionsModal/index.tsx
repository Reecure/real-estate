import Link from "next/link";
import React from "react";
import { Paths } from "@/constants/paths";

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

type Props = {};

const UserActions = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col p-3 bg-primary-dark-gray rounded-lg space-y-2">
        {Actions.map((item) => {
          return (
            <Link key={item.name} href={item.path}>
              {item.name}
            </Link>
          );
        })}
        <button className="cursor-pointer text-left">Log out</button>
      </div>
    </div>
  );
};

export default UserActions;
