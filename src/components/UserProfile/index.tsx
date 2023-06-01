import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { fetchUser, selectUser } from "@/redux/features/getUserByIdSlice";
import React, { useCallback, useEffect, useState } from "react";
import EditProfile from "../Modals/EditProfileModal";
import Container from "../UI/Container";
import RecentActions from "./RecentActions";
import UserCard from "./UserCard";

const UserProfile = () => {
  const [userEditModalOpen, setUserEditModalOpen] = useState(false);

  const { user } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser("6453dfb9c8156bf9ee4a6f75"));
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
          user={user}
          userEditModalOpen={userEditModalOpen}
          setUserEditModalOpen={modalOpenHandler}
        />
        <RecentActions />
      </Container>

      <EditProfile
        user={user}
        className="absolute top-0 left-0 "
        userEditModalOpen={userEditModalOpen}
        setUserEditModalOpen={modalOpenHandler}
      />
    </div>
  );
};

export default UserProfile;
