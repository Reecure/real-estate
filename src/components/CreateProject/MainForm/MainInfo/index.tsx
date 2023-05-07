import React from "react";
import { Field } from "formik";

type Props = {};

const MainInfo = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col w-full">
        <label htmlFor="mlsNumberr" className="mb-1 text-[12px]">
          mls number
        </label>
        <Field
          type="text"
          id="mlsNumber"
          name="mlsNumber"
          className="w-full  py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
        <label htmlFor="price" className="mb-1 text-[12px]">
          Price
        </label>
        <Field
          name="price"
          id="price"
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
        <label htmlFor="propertyType" className="mb-1 text-[12px]">
          Property type
        </label>
        <Field
          name="propertyType"
          id="propertyType"
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="address" className="mb-1 text-[12px]">
          Address
        </label>
        <Field
          name="address"
          id="address"
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
        <label htmlFor="neighbourhood" className="mb-1 text-[12px]">
          Neighbourhood
        </label>
        <Field
          name="neighbourhood"
          id="neighbourhood"
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
      </div>
    </div>
  );
};

export default MainInfo;
