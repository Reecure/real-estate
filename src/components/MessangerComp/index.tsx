import React from "react";
import Chats from "@/components/MessangerComp/Chats";

const MessangerComp = () => {
  return (
    <div className={`flex  gap-10`}>
      <div className={` min-h-screen bg-primary-dark-gray rounded-2xl`}>
        <Chats />
      </div>

      <div
        className={`w-full h-screen  bg-primary-dark-gray rounded-2xl`}
      ></div>
    </div>
  );
};

export default MessangerComp;
