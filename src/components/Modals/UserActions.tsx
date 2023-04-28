import Link from "next/link";
import React from "react";

type Props = {};

const UserActions = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col p-3 bg-primary-dark-gray rounded-lg space-y-2">
        <Link href="/user-profile">Account</Link>
        <Link href="/new-project">New project</Link>
        <Link href="/user-profile/dashboards">Dashboards</Link>
        <p className="cursor-pointer">Log out</p>
      </div>
    </div>
  );
};

export default UserActions;
