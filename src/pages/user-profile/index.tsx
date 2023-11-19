import Navbar from "@/components/Navbar";
import Container from "@/components/UI/Container";
import UserProfile from "@/components/UserProfile";
import { store } from "@/redux/app/store";

import React, { FC } from "react";
import { Provider } from "react-redux";

type Props = {};

const UserProfilePage: FC<Props> = () => {
	return (
		<Provider store={store}>
			<Container>
				<Navbar />
				<main className="py-16">
					<UserProfile />{" "}
				</main>
			</Container>
		</Provider>
	);
};

export default UserProfilePage;
