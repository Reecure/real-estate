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
      <table className="text-white  w-full  ">
        <tbody>
          <tr className="text-primary-text-dark-gray">
            <td className="py-4 px-7">Name</td>
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
