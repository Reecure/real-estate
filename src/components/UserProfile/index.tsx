import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { fetchUser, selectUser } from "@/redux/features/getUserByIdSlice";
import React, { useCallback, useEffect, useState } from "react";
import EditProfile from "../Modals/EditProfileModal";
import Container from "../UI/Container";
import RecentActions from "./RecentActions";
import UserCard from "./UserCard";
import Modal from "@/components/UI/Modal/Modal";
import EditProfileForm from "../Modals/EditProfileModal";

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

	const modalOpenHandler = () => {
		setUserEditModalOpen(prev => !prev);
	};

	return (
		<div className={"relative "}>
			<Container
			>
				<UserCard
					user={user}
					userEditModalOpen={userEditModalOpen}
					setUserEditModalOpen={modalOpenHandler}
				/>
				<RecentActions />
			</Container>

			<Modal isOpen={userEditModalOpen} setIsOpen={modalOpenHandler} >
				<EditProfileForm
					user={user}
				/>
			</Modal>

		</div>
	);
};

export default UserProfile;
