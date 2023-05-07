import Image from "next/image";
import React, { FC } from "react";
import img from "../../../../../public/editModalImage.png";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  className?: string;
};

const RecentTableRaw: FC<Props> = ({ className }) => {
  return (
    <tr className={`py-4  ${className} `}>
      <td
        className={`flex min-w-[190px] items-center space-x-2 sticky left-0 z-[1]   ${className}`}
      >
        <Image
          src={img}
          alt="img"
          className="my-4 ml-6 rounded-md w-12 h-12 "
        />
        <p>Malto House</p>
      </td>
      <td className="min-w-[150px] px-1">535 sq ft</td>
      <td className="min-w-[150px] px-1">$30K</td>
      <td className="min-w-[150px] px-1">Yesterday</td>
      <td className="min-w-[150px] px-1">You</td>
      <td className="min-w-[40px] px-1">
        <BsThreeDotsVertical />
      </td>
    </tr>
  );
};

export default RecentTableRaw;
