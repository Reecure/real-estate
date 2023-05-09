import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { fetchUser, selectUser } from "@/redux/features/getUserByIdSlice";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import EditProfile from "../Modals/EditProfile";
import Container from "../UI/Container";
import RecentActions from "./RecentActions";
import UserCard from "./UserCard";

type Props = {};

const UserProfile = (props: Props) => {
  const [userEditModalOpen, setUserEditModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const selectUserById = useAppSelector(selectUser);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

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

  const modalOpenHandler = useCallback((arg: boolean) => {
    setUserEditModalOpen(arg);
  }, []);

  return (
    <div className={`relative `}>
      <Container
        className={`custom-padding py-10 ${userEditModalOpen && "blur-lg"} `}
      >
        <UserCard
          user={selectUserById}
          userEditModalOpen={userEditModalOpen}
          setUserEditModalOpen={modalOpenHandler}
        />
        <RecentActions />
      </Container>

      <div className={`${!userEditModalOpen ? "hidden" : "static"} `}>
        {userEditModalOpen && (
          <EditProfile
            user={selectUserById}
            className="absolute top-0 left-0 "
            userEditModalOpen={userEditModalOpen}
            setUserEditModalOpen={modalOpenHandler}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
