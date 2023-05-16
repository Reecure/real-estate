import React from "react";
import ChatCard from "@/components/MessangerComp/Chats/ChatCard";

const Chats = () => {
  return (
    <div className={`w-full max-w-full`}>
      {Array(10)
        .fill(null)
        .map((item, i) => {
          return <ChatCard key={i} />;
        })}
    </div>
  );
};

export default Chats;
