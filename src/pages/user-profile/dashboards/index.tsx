import UserDashboards from "@/components/UserProfile/UserDashboards";
import { store } from "@/redux/app/store";
import React from "react";
import { Provider } from "react-redux";

type Props = {};

const Dashboards = (props: Props) => {
  return (
    <Provider store={store}>
      <div className="">
        <UserDashboards />
      </div>{" "}
    </Provider>
  );
};

export default Dashboards;
