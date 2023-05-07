"use client";

import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  fetchUserProjects,
  selectProjects,
  selectVisibleProjects,
} from "@/redux/features/getUserProjectsSlice";
import { Project } from "@/types";
import React, { useEffect } from "react";

import ProjectTableRaw from "./ProjectTableRaw";

type Props = {};

const ProjectTable = (props: Props) => {
  const { error, loading, projects } = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const visibleProjects = useAppSelector(selectVisibleProjects);

  useEffect(() => {
    dispatch(fetchUserProjects());
  }, [dispatch]);

  return (
    <>
      <div className="overflow-x-auto ">
        <table className="text-white  w-full  ">
          <tbody>
            <tr className="text-primary-text-dark-gray">
              <td className="py-4 px-7 sticky left-0 z-[1] bg-black">Name</td>
              <td className="px-1">Type</td>
              <td className="px-1">Size</td>
              <td className="px-1">Price</td>
              <td className="px-1">Creation Data</td>
              <td className="px-1"></td>
              <td className="px-1"></td>
            </tr>
            {visibleProjects.map((item: Project, i) => {
              return (
                <ProjectTableRaw
                  key={item._id}
                  item={{ ...item }}
                  className={`${
                    i % 2 === 0 ? "bg-[#0A0A0A]" : "bg-primary-dark-gray"
                  }`}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectTable;
