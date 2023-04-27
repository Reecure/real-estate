import React from "react";
import Container from "../UI/Container";
import RecentActions from "./RecentActions";
import UserCard from "./UserCard";

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <div className="relative">
      <div className="absolute top-16 left-24 text-primary-blue font-semibold text-2xl whitespace-nowrap cursor-pointer">
        <p>Back to Projects</p>
      </div>
      <Container className="custom-padding py-10">
        <UserCard />
        <RecentActions />
      </Container>
    </div>
  );
};

export default UserProfile;
