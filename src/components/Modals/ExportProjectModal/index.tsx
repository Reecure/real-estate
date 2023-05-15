import React from "react";
import BlueButton from "../../UI/Buttons/BlueButton";
import GradientButton from "../../UI/Buttons/GradientButton";

type Props = {};

const ExportProject = (props: Props) => {
  return (
    <div className="max-w-[560px] p-10 rounded-[24px] shadow-xl shadow-white/30 text-white bg-[#0A0A0A]">
      <div className="flex justify-between items-center mb-10">
        <h4 className="text-4xl">Export Project</h4>
        <button>x</button>
      </div>
      <div className=" mb-10">
        <div className="">
          <p>You want to export project “Morel House” by Julia Ellei.</p>
        </div>
        <div className="flex flex-col w-full justify-center ">
          <label htmlFor="fileName" className="mb-1 text-[12px]">
            File Name
          </label>
          <input
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          />
          <label htmlFor="projectsFormat" className="mb-1 text-[12px]">
            Projects Format
          </label>
          <input
            type="text"
            className="w-full py-3 px-2 mb-6 bg-[#0E0E0E] rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-6">
        <BlueButton>Cancel</BlueButton>
        <GradientButton>Export</GradientButton>
      </div>
    </div>
  );
};

export default ExportProject;
