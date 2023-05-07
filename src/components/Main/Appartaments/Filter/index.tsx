import BlueButton from "@/components/UI/Buttons/BlueButton";
import React, { useState } from "react";

type Props = {};

const Filter = (props: Props) => {
  const [filterOpen, setfilterOpen] = useState(false);

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
        <select name="" id="" className="py-3 px-2 bg-[#0E0E0E] rounded-lg">
          <option value="All"> Studio</option>
          <option value="Studio">Studio</option>
          <option value="OneBedRoom">1 Bed Room</option>
          <option value="TwoBedRoom"> 2 Bed Room</option>
        </select>
      </div>
      <BlueButton onClick={() => setfilterOpen((prev) => !prev)}>
        Filters
      </BlueButton>
      {filterOpen && (
        <div className="fixed top-0 right-0 w-[80%] sm:w-[50%] md:w-[30%] h-full py-10 px-10 bg-black z-50 overflow-y-auto">
          <article className="flex justify-between">
            <h3>Filters</h3>
            <button onClick={() => setfilterOpen((prev) => !prev)}>x</button>
          </article>

          {Array(40)
            .fill(null)
            .map((item, i) => {
              return (
                <p key={i} className={"text-3xl"}>
                  Some text
                </p>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Filter;
