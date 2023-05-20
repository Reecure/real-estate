
import React from "react";
import Layout from "../../layout";

import { Provider } from "react-redux";
import { store } from "@/redux/app/store";
import ApartmentPage from "../../../components/ApartmentPage";

const Apartment = () => {
  return (
    <Provider store={store}>
      <Layout>
        <div className="text-white py-32 custom-padding">
          <ApartmentPage />
        </div>
      </Layout>
    </Provider>
  );
};

export default Apartment;
