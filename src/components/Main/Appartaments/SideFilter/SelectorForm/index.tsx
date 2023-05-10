import React, { FC, useState } from "react";

type Props = {
  title: string;
  arr: string[];
  handler: (arg: null | string) => void;
};

const SelectorForm: FC<Props> = ({ title, arr, handler }) => {
  const [selectedValue, setSelectedValue] = useState<null | number>(null);
  return (
    <div className="space-y-2">
      <p>{title}</p>
      <div className="grid grid-cols-4 gap-3">
        {arr.map((item, i) => {
          return (
            <div
              onClick={() => {
                console.log(selectedValue, item);
                handler(item.replace("+", ""));
                setSelectedValue(i);
              }}
              key={i}
              className={`${
                selectedValue === i && "border-[1px] border-white"
              } flex p-6 items-center justify-center w-10 h-10 bg-[#0E0E0E] rounded-lg cursor-pointer`}
            >
              <p className=" ">{item}</p>
            </div>
          );
        })}
        <div>
          <button
            onClick={() => {
              handler(null);
              setSelectedValue(null);
            }}
            className="flex p-6 items-center justify-center w-10 h-10 bg-[#0E0E0E] rounded-lg cursor-pointer"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectorForm;
