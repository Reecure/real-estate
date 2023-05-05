import GradientButton from "@/components/UI/Buttons/GradientButton";
import Link from "next/link";
import React from "react";

type Props = {};

const ProjectsHoodNav = (props: Props) => {
  return (
    <div className="flex space-x-5">
      <input
        type="text"
        placeholder="Search"
        className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
      />
      <select className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg">
        <option>All Projects</option>
        <option>Apartment</option>
        <option>Town house</option>
      </select>
      <Link href="/new-project">
        <GradientButton className="whitespace-nowrap">
          Create Project
        </GradientButton>
      </Link>
    </div>
  );
};

export default ProjectsHoodNav;
