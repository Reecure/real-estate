import BlueButton from "@/components/UI/Buttons/BlueButton";
import Image from "next/image";
import React from "react";
import avatar from "../../../../public/Avatar.png";

type Props = {};

const MessageToUserCard = (props: Props) => {
  return (
    <div className="max-w-[250px]">
      <div>
        <Image src={avatar} alt="avatar" className="mx-auto" />
        <p className="text-xl text-center mb-4">Melissa William</p>
      </div>
      <div className="space-y-2 flex flex-col text-xs">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="bg-primary-dark-gray rounded-lg py-3 px-4"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="bg-primary-dark-gray rounded-lg py-3 px-4"
        />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          className="bg-primary-dark-gray rounded-lg min-h-[100px] py-3 px-4"
        />
      </div>
      <BlueButton className="mt-8 w-full">Send Message</BlueButton>
    </div>
  );
};

export default MessageToUserCard;
