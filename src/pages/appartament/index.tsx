import AppartamentPage from "@/components/AppartamentPage";
import React from "react";
import Layout from "../layout";

type Props = {};

const Appartament = (props: Props) => {
  return (
    <Layout>
      <div className="text-white py-32 custom-padding">
        <AppartamentPage />
      </div>
    </Layout>
  );
};

export default Appartament;
