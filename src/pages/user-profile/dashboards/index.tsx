import Navbar from "@/components/Navbar";
import Container from "@/components/UI/Container";
import UserDashboards from "@/components/UserProfile/UserDashboards";
import { store } from "@/redux/app/store";
import { SessionProvider } from "next-auth/react";
import React, { FC } from "react";
import { Provider } from "react-redux";

type Props = {
  session: any;
};

const Dashboards: FC<Props> = ({ session }) => {
  return (
    <Container className="">
      <SessionProvider session={session}>
        <Provider store={store}>
          <Navbar />
          <div className="custom-padding">
            <UserDashboards />
          </div>
        </Provider>
      </SessionProvider>
    </Container>
  );
};

export default Dashboards;
