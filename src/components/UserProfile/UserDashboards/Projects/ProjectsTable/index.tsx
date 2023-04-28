"use client";

import React from "react";
import ProjectTableRaw from "./ProjectTableRaw";

type Props = {};

const ProjectTable = (props: Props) => {
  return (
    <>
      <table className="text-white  w-full  ">
        <tbody>
          <tr className="text-primary-text-dark-gray">
            <td className="py-4 px-7">Name</td>
            <td className="px-1">Type</td>
            <td className="px-1">size</td>
            <td className="px-1">price</td>
            <td className="px-1">Creation Data</td>
            <td className="px-1"></td>
            <td className="px-1"></td>
          </tr>
          {Array(12)
            .fill(null)
            .map((item, i) => {
              return (
                <ProjectTableRaw
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-white/5" : "bg-primary-dark-gray"
                  }`}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ProjectTable;
