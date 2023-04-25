import DeleteModal from "@/components/Modals/DeleteModal";
import EditProfile from "@/components/Modals/EditProfile";
import EditProject from "@/components/Modals/EditProject";
import ExportProject from "@/components/Modals/ExportProject";
import React from "react";

type Props = {};

const Forms = (props: Props) => {
  return (
    <div>
      <DeleteModal />
      <EditProfile />
      <EditProject />
      <ExportProject />
    </div>
  );
};

export default Forms;
