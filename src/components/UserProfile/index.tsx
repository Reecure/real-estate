import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import EditProfile from "../Modals/EditProfile";
import Container from "../UI/Container";
import RecentActions from "./RecentActions";
import UserCard from "./UserCard";

type Props = {};

const UserProfile = (props: Props) => {
  const [userEditModalOpen, setUserEditModalOpen] = useState(false);

  useEffect(() => {
    if (userEditModalOpen) {
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.body.scrollTop = 0;
    } else {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [userEditModalOpen]);

  const modalOpenHandler = useCallback(
    (arg: boolean) => {
      setUserEditModalOpen(arg);
    },
    [userEditModalOpen]
  );

  return (
    <div className={`relative `}>
      <div
        className={`absolute top-16 left-24 text-primary-blue font-semibold text-2xl whitespace-nowrap cursor-pointer ${
          userEditModalOpen && "blur-sm"
        }`}
      >
        <Link href="/">Back to Projects</Link>
      </div>
      <Container
        className={`custom-padding py-10 ${userEditModalOpen && "blur-lg"} `}
      >
        <UserCard
          userEditModalOpen={userEditModalOpen}
          setUserEditModalOpen={modalOpenHandler}
        />
        <RecentActions />
      </Container>
      <div className={` ${!userEditModalOpen ? "hidden" : "block"} `}>
        <div
          className={`absolute min-w-screen min-h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
        >
          {userEditModalOpen && (
            <EditProfile
              userEditModalOpen={userEditModalOpen}
              setUserEditModalOpen={modalOpenHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
