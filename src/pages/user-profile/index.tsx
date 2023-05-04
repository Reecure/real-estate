import Navbar from "@/components/Navbar";
import Container from "@/components/UI/Container";
import UserProfile from "@/components/UserProfile";
import { store } from "@/redux/app/store";

import React from "react";
import { Provider } from "react-redux";

type Props = {};

const UserProfilePage = (props: Props) => {
  return (
    <Container>
      <Navbar />
      <main className="py-16">
        <Provider store={store}>
          <UserProfile />{" "}
        </Provider>
      </main>
    </Container>
  );
};

export default UserProfilePage;
