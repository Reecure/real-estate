import React from "react";
import RecentTableRaw from "./RecentTableRaw";

type Props = {};

let objects = [{}, {}, {}, {}, {}];

const RecentActionsTable = (props: Props) => {
  return (
    <div>
      <div className="mt-12">
        <h4 className="text-2xl text-white font-semibold">Recent Action</h4>
      </div>
      <table className="text-white  w-full  ">
        <tr className="text-primary-text-dark-gray">
          <td className="py-4 px-7  ">Project Name</td>
          <td className="px-1">Project Size</td>
          <td className="px-1">Price</td>
          <td className="px-1">date</td>
          <td className="px-1">Owner</td>
          <td className="px-1"></td>
        </tr>
        {objects.map((item, i) => {
          return (
            <RecentTableRaw
              key={i}
              className={`${i % 2 === 0 ? "bg-white/10" : " bg-[#0E0E0E]"}  `}
            />
          );
        })}
      </table>{" "}
    </div>
  );
};

export default RecentActionsTable;
