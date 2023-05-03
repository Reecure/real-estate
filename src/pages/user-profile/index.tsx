import UserProfile from "@/components/UserProfile";
import { store } from "@/redux/app/store";
import React from "react";
import { Provider } from "react-redux";

type Props = {};

const UserProfilePage = (props: Props) => {
  return (
    <div>
      <Provider store={store}>
        <UserProfile />{" "}
      </Provider>
    </div>
  );
};

export default UserProfilePage;
