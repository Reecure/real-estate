import BlackButton from "@/components/UI/Buttons/BlackButton";
import Image from "next/image";
import React, { FC } from "react";
import img from "../../../../../../../public/editModalImage.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Project } from "@/types";

type Props = {
  className: string;
  item: Project;
};

const ProjectTableRaw: FC<Props> = ({ className, item }) => {
  return (
    <tr className={`${className}`}>
      <td
        className={`${className} min-w-[150px] flex items-center space-x-2 sticky left-0 z-[1]`}
      >
        <Image
          src={img}
          alt="img"
          className="my-4 ml-6 rounded-md w-12 h-12 "
        />
        <p>{item.neighbourhood}</p>
      </td>
      <td className="min-w-[150px] px-1">{item.propertyType}</td>
      <td className="min-w-[150px] px-1">{item.size}</td>
      <td className="min-w-[150px] px-1">{item.price}</td>
      <td className="min-w-[150px] px-1">{item.yearBuilt}</td>
      <td className="min-w-[150px] px-1">
        <BlackButton className="!px-10">Edit</BlackButton>
      </td>
      <td className="px-1 min-[60px]">
        <BsThreeDotsVertical />
      </td>
    </tr>
  );
};

export default ProjectTableRaw;
