import BlackButton from "@/components/UI/Buttons/BlackButton";
import React, { FC } from "react";

type Props = {
  className: string;
};

const RequestsTableRaw: FC<Props> = ({ className }) => {
  return (
    <tr className={`${className}`}>
      <td className="py-4 px-7  ">Malto House</td>
      <td className="px-1">Apartment</td>
      <td className="px-1">In Progress</td>
      <td className="px-1">It’s good apartment</td>
      <td className="px-1">3/28/2022</td>
      <td className="px-1">Rin Ellei</td>
      <td className="px-1">
        <BlackButton>Answer</BlackButton>
      </td>
      <td className="px-1">Act</td>
    </tr>
  );
};

export default RequestsTableRaw;
