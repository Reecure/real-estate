import Navbar from "@/components/Navbar";
import Container from "@/components/UI/Container";
import UserProfile from "@/components/UserProfile";
import { store } from "@/redux/app/store";

import React, { FC } from "react";
import { Provider } from "react-redux";

type Props = {
  session: any;
};

const UserProfilePage: FC<Props> = ({ session }) => {
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
