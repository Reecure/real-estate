import GradientButton from "@/components/UI/Buttons/GradientButton";
import Link from "next/link";
import React, { FC } from "react";
import ProjectsHoodNav from "./ProjectsHoodNav";
import RequestsHoodNav from "./RequestsHoodNav";

type Props = {
  sectionHandler: (id: number) => void;
  selectedSection: number;
};

const Hood: FC<Props> = ({ sectionHandler, selectedSection }) => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between py-10 space-y-5 lg:space-y-5">
      <div>
        <ul className="flex  space-x-5">
          <li
            className={`text-xl md:text-3xl cursor-pointer ${
              selectedSection === 0
                ? "text-white"
                : "text-primary-text-dark-gray duration-150"
            }`}
            onClick={() => sectionHandler(0)}
          >
            Dashboard
          </li>
          <li
            className={`text-2xl md:text-3xl cursor-pointer ${
              selectedSection === 1
                ? "text-white"
                : "text-primary-text-dark-gray duration-150"
            }`}
            onClick={() => sectionHandler(1)}
          >
            Requests
          </li>
          <li
            className={`text-2xl md:text-3xl cursor-pointer ${
              selectedSection === 2
                ? "text-white"
                : "text-primary-text-dark-gray duration-150"
            }`}
            onClick={() => sectionHandler(2)}
          >
            Projects
          </li>
        </ul>
      </div>
      <div>
        {selectedSection === 1 ? (
          <RequestsHoodNav />
        ) : selectedSection === 2 ? (
          <>
            <ProjectsHoodNav />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Hood;
