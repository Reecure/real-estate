import Image from "next/image";
import React, { FC } from "react";
import img from "../../../../../public/editModalImage.png";

type Props = {
  className?: string;
};

const RecentTableRaw: FC<Props> = ({ className }) => {
  return (
    <tr className={`py-4  ${className} `}>
      <td className="flex items-center space-x-2 ">
        <Image
          src={img}
          alt="img"
          className="my-4 ml-6 rounded-md w-12 h-12 "
        />
        <p>Malto House</p>
      </td>
      <td className="px-1">535 sq ft</td>
      <td className="px-1">$30K</td>
      <td className="px-1">Yesterday</td>
      <td className="px-1">You</td>
      <td className="px-1">Action</td>
    </tr>
  );
};

export default RecentTableRaw;
