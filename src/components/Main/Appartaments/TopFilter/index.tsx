import React from "react";

type Props = {};

const TopFilter = (props: Props) => {
  return (
    <div className="w-full h-10 flex justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="h-full py-3 px-2 mb-5 bg-black rounded-lg"
      />

      <div>
        <select name="" id="" className=" py-3 px-2  bg-black rounded-lg">
          <option value="">Sort by Price ASC</option>
          <option value="">Sort by Price DESC</option>
        </select>
      </div>
    </div>
  );
};

export default TopFilter;
