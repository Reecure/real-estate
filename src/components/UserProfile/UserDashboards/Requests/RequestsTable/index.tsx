import Container from "@/components/UI/Container";
import React from "react";
import RequestsTableRaw from "./RequestsTableRaw";

type Props = {};

const RequestsTable = (props: Props) => {
  return (
    <>
      <table className="text-white  w-full  ">
        <tr className="text-primary-text-dark-gray">
          <td className="py-4 px-7">Name</td>
          <td className="px-1">Type</td>
          <td className="px-1">Status</td>
          <td className="px-1">Text</td>
          <td className="px-1">Data</td>
          <td className="px-1">User</td>
          <td className="px-1"></td>
          <td className="px-1"></td>
        </tr>
        {Array(12)
          .fill(null)
          .map((item, i) => {
            return (
              <RequestsTableRaw
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-white/5" : "bg-primary-dark-gray"
                }`}
              />
            );
          })}
      </table>
    </>
  );
};

export default RequestsTable;
