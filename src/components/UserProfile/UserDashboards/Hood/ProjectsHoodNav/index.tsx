import GradientButton from "@/components/UI/Buttons/GradientButton";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  selectProjects,
  setSearchValue,
  setType,
} from "@/redux/features/getUserProjectsSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ProjectTypes } from "@/constants/projectTypes";

const ProjectTypeOptions = [
  {
    name: "All",
    value: "All Projects",
  },
  {
    name: ProjectTypes.Apartment,
    value: ProjectTypes.Apartment,
  },
  {
    name: ProjectTypes.Townhouse,
    value: ProjectTypes.Townhouse,
  },
  {
    name: ProjectTypes.Penthouse,
    value: ProjectTypes.Penthouse,
  },
];

const ProjectsHoodNav = () => {
  const [search, setSearch] = useState("");

  const { selectedType } = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const selectTypeHandler = (value: string) => {
    dispatch(setType(value));
  };
  useEffect(() => {
    dispatch(setSearchValue(search));
  }, [search, dispatch]);
  const searchHandler = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="flex space-x-5">
      <input
        onChange={(e) => {
          searchHandler(e.currentTarget.value);
        }}
        value={search}
        type="text"
        placeholder="Search"
        className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
      />
      <select
        onChange={(e) => {
          selectTypeHandler(e.currentTarget.value);
        }}
        value={selectedType}
        className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
      >
        {ProjectTypeOptions.map((item) => {
          return (
            <option key={item.name} value={item.name}>
              {item.value}
            </option>
          );
        })}
      </select>
      <Link href="/new-project">
        <GradientButton className="whitespace-nowrap py-3">
          Create Project
        </GradientButton>
      </Link>
    </div>
  );
};

export default ProjectsHoodNav;
