import AppartamentPage from "@/components/AppartamentPage";
import React from "react";
import Layout from "../../layout";

import { Provider } from "react-redux";
import { store } from "@/redux/app/store";

type Props = {};

const Appartament = () => {
  return (
    <Provider store={store}>
      <Layout>
        <div className="text-white py-32 custom-padding">
          <AppartamentPage />
        </div>
      </Layout>
    </Provider>
  );
};

export default Appartament;
