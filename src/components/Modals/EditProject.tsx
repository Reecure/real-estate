import Image from "next/image";
import React from "react";
import image from "../../../public/editModalImage.png";
import BlueButton from "../UI/Buttons/BlueButton";
import GradientButton from "../UI/Buttons/GradientButton";

type Props = {};

const EditProject = (props: Props) => {
  return (
    <div className="max-w-[632px] p-10 rounded-[24px] shadow-xl shadow-white/30 text-white bg-[#0A0A0A]">
      <div className="flex justify-between items-center mb-10">
        <h4 className="text-4xl">Edit Project</h4>
        <button>x</button>
      </div>
      <div className="flex mb-10">
        <div className="mr-10">
          <Image
            src={image}
            alt="image"
            className="max-w-[120px] max-h-[160px]"
          />
        </div>
        <div className="flex flex-col w-full justify-center ">
          <label htmlFor="name" className="mb-1 text-[12px]">
            Name
          </label>
          <input
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          />
          <label htmlFor="type" className="mb-1 text-[12px]">
            Type
          </label>
          <input
            type="text"
            className="w-full py-3 px-2 mb-6 bg-[#0E0E0E] rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <BlueButton>Delete</BlueButton>
        <BlueButton>Suspend</BlueButton>
        <BlueButton>Export</BlueButton>
        <GradientButton>Save</GradientButton>
      </div>
    </div>
  );
};

export default EditProject;
