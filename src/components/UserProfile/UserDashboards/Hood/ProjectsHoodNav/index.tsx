import GradientButton from "@/components/UI/Buttons/GradientButton";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  selectProjects,
  setSearchValue,
  setType,
} from "@/redux/features/getUserProjectsSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const ProjectsHoodNav = (props: Props) => {
  const [search, setSearch] = useState("");

  const { selecteType, searchValue } = useAppSelector(selectProjects);
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
        value={selecteType}
        className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
      >
        <option value="All">All Projects</option>
        <option value="Apartment">Apartment</option>
        <option value="Town House">Town House</option>
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
