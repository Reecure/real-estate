"use client";

import Main from "@/components/Main";
import { store } from "@/redux/app/store";
import { Provider } from "react-redux";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <Provider store={store}>
        <Main />
      </Provider>
    </Layout>
  );
}
