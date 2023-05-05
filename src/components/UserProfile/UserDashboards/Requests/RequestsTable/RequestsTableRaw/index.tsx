import BlackButton from "@/components/UI/Buttons/BlackButton";
import { ApartmentRequest } from "@/types";
import React, { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  className: string;
  item: ApartmentRequest;
};

const RequestsTableRaw: FC<Props> = ({ className, item }) => {
  return (
    <tr className={`${className}`}>
      <td className="py-4 px-7  ">{item.name}</td>
      <td className="px-1">{item.type}</td>
      <td className="px-1">{item.status}</td>
      <td className="px-1">{item.text}</td>
      <td className="px-1">{item.data}</td>
      <td className="px-1 text-primary-blue">{item.user}</td>
      <td className="px-1">
        <BlackButton className="border-[2px] border-primary-text-dark-gray">
          Answer
        </BlackButton>
      </td>
      <td className="px-1">
        <BsThreeDotsVertical className="cursor-pointer" />
      </td>
    </tr>
  );
};

export default RequestsTableRaw;
