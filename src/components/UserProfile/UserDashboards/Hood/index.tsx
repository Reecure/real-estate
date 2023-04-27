import React, { FC } from "react";

type Props = {
  sectionHandler: (id: number) => void;
  selectedSection: number;
};

const Hood: FC<Props> = ({ sectionHandler, selectedSection }) => {
  return (
    <div className="flex justify-between">
      <div>
        <ul className="flex space-x-5">
          <li
            className={`text-3xl cursor-pointer ${
              selectedSection === 0
                ? "text-white"
                : "text-primary-text-dark-gray duration-150"
            }`}
            onClick={() => sectionHandler(0)}
          >
            Dashboard
          </li>
          <li
            className={` text-3xl cursor-pointer ${
              selectedSection === 1
                ? "text-white"
                : "text-primary-text-dark-gray duration-150"
            }`}
            onClick={() => sectionHandler(1)}
          >
            Requests
          </li>
          <li
            className={` text-3xl cursor-pointer ${
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
      <div className="flex space-x-4">
        <select className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg">
          <option>All Statuses</option>
          <option>All Statuses</option>
          <option>All Statuses</option>
          <option>All Statuses</option>
        </select>
        <select className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg">
          <option>All Types</option>
          <option>All Statuses</option>
          <option>All Statuses</option>
          <option>All Statuses</option>
        </select>
      </div>
    </div>
  );
};

export default Hood;
