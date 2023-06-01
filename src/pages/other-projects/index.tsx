import OtherProjectsPage from "@/components/OtherProjects";
import { store } from "@/redux/app/store";
import React from "react";
import { Provider } from "react-redux";
import Layout from "../layout";

const OtherProjects = () => {
  return (
    <Layout>
      <Provider store={store}>
        <OtherProjectsPage />
      </Provider>
    </Layout>
  );
};

export default OtherProjects;
