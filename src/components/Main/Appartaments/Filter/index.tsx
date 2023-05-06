import BlueButton from "@/components/UI/Buttons/BlueButton";
import React from "react";

type Props = {};

const Filter = (props: Props) => {
  return (
    <div className="flex justify-between py-8">
      <div className="hidden md:flex space-x-6">
        <div className="border-[1px]  text-primary-blue border-primary-blue  py-3 px-6 rounded-lg">
          All
        </div>
        <div className="border-[1px] border-primary-text-dark-gray py-3 px-6 rounded-lg">
          Studio
        </div>
        <div className="border-[1px]  border-primary-text-dark-gray py-3 px-6 rounded-lg">
          1 Bed Room
        </div>
        <div className="border-[1px]  border-primary-text-dark-gray py-3 px-6 rounded-lg">
          2 Bed Room
        </div>
      </div>
      <div className="block md:hidden space-x-6">
        <select name="" id="">
          <option value="All"> Studio</option>
          <option value="Studio">Studio</option>
          <option value="OneBedRoom">1 Bed Room</option>
          <option value="TwoBedRoom"> 2 Bed Room</option>
        </select>
      </div>
      <BlueButton>Filters</BlueButton>
    </div>
  );
};

export default Filter;
