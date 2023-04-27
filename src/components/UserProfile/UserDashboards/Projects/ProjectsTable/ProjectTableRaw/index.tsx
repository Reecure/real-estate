import BlackButton from "@/components/UI/Buttons/BlackButton";
import Image from "next/image";
import React, { FC } from "react";
import img from "../../../../../../../public/editModalImage.png";

type Props = {
  className: string;
};

const ProjectTableRaw: FC<Props> = ({ className }) => {
  return (
    <tr className={`${className}`}>
      <td className="flex items-center space-x-2 ">
        <Image
          src={img}
          alt="img"
          className="my-4 ml-6 rounded-md w-12 h-12 "
        />
        <p>Malto House</p>
      </td>
      <td className="px-1">Apartment</td>
      <td className="px-1">20</td>
      <td className="px-1">$12,0000</td>
      <td className="px-1">2/16/2022</td>
      <td className="px-1">
        <BlackButton>Answer</BlackButton>
      </td>
      <td className="px-1">Act</td>
    </tr>
  );
};

export default ProjectTableRaw;
