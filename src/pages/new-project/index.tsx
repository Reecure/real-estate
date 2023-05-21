import CreateProject from "@/components/CreateProject";
import React, { FC } from "react";

type Props = {
  session: any;
};

const NewProject: FC<Props> = () => {
  return <CreateProject />;
};

export default NewProject;
