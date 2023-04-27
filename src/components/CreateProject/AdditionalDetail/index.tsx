import React from "react";

type Props = {};

const AdditionalDetail = (props: Props) => {
  return (
    <div>
      <h5>Features</h5>
      <div className="">
        <div className="flex gap-10">
          <div className="flex flex-col w-full">
            <label htmlFor="lastname" className="mb-1 text-[12px]">
              accepted currencies
            </label>
            <input
              type="text"
              className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
            />
            <label htmlFor="firstname" className="mb-1 text-[12px]">
              size
            </label>
            <input
              type="text"
              className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div>
          <div className="flex gap-10">
            <div className="flex flex-col w-full">
              <label htmlFor="lastname" className="mb-1 text-[12px]">
                bedrooms
              </label>
              <input
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
              <label htmlFor="firstname" className="mb-1 text-[12px]">
                year built
              </label>
              <input
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastname" className="mb-1 text-[12px]">
                bathrooms
              </label>
              <input
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
              <label htmlFor="firstname" className="mb-1 text-[12px]">
                floors
              </label>
              <input
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="">Description</label>
        <div className="h-40 w-full bg-white/5"></div>
      </div>

      <div>
        <label htmlFor="">agent remarks</label>
        <div className="h-20 w-full bg-white/5"></div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="lastname" className="mb-1 text-[12px]">
          Video link
        </label>
        <input
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
      </div>
    </div>
  );
};

export default AdditionalDetail;
