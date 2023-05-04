"use client";

import Main from "@/components/Main";
import { store } from "@/redux/app/store";
import { Provider } from "react-redux";
import Layout from "./layout";
import { SessionProvider, useSession } from "next-auth/react";
import Login from "@/components/LogIn";
import Register from "@/components/Register";

export default function Home({ session }: { session: any }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Provider store={store}>
          <Main />
          <Login />
          <Register />
        </Provider>
      </Layout>{" "}
    </SessionProvider>
  );
}
