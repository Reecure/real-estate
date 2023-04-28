import React from "react";
import { Field } from "formik";

type Props = {};

const MainInfo = (props: Props) => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col w-full">
        <label htmlFor="mls_number" className="mb-1 text-[12px]">
          mls number
        </label>
        <Field
          type="text"
          id="mls_number"
          name="mls_number"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
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
        <label htmlFor="property_type" className="mb-1 text-[12px]">
          Property type
        </label>
        <Field
          name="property_type"
          id="property_type"
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
