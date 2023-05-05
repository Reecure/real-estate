import CreateProject from "@/components/CreateProject";
import { SessionProvider } from "next-auth/react";
import React, { FC } from "react";

type Props = {
  session: any;
};

const NewProject: FC<Props> = ({ session }) => {
  return (
    <SessionProvider session={session}>
      <CreateProject />
    </SessionProvider>
  );
};

export default NewProject;
