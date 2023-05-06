import Navbar from "@/components/Navbar";
import Container from "@/components/UI/Container";
import UserDashboards from "@/components/UserProfile/UserDashboards";
import { store } from "@/redux/app/store";
import React, { FC } from "react";
import { Provider } from "react-redux";

type Props = {
  session: any;
};

const Dashboards: FC<Props> = ({ session }) => {
  return (
    <Container className="">
      <Provider store={store}>
        <Navbar />
        <div className="custom-padding">
          <UserDashboards />
        </div>
      </Provider>
    </Container>
  );
};

export default Dashboards;
