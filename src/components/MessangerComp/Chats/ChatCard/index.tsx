import React from "react";

const ChatCard = () => {
  return (
    <div
      className={`flex w-full max-w-[400px] space-x-10  whitespace-nowrap px-5 py-2`}
    >
      <div className={`flex items-center space-x-2 max-w-[60%] w-full`}>
        <div className={`w-5 h-5 bg-cyan-100 rounded-full`}></div>
        <div>John Doe</div>
      </div>

      <div>03/23/2023</div>
    </div>
  );
};

export default ChatCard;
