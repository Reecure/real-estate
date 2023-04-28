import React from "react";
import { Field } from "formik";

type Props = {};

const ShareOffersForm = (props: Props) => {
  return (
    <>
      <div className="flex gap-10">
        <div className="flex flex-col w-full">
          <label htmlFor="firstName" className="mb-1 text-[12px]">
            First name
          </label>
          <Field
            name="firstName"
            id="firstName"
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          />
          <label htmlFor="email" className="mb-1 text-[12px]">
            Email address
          </label>
          <Field
            name="email"
            id="email"
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lastName" className="mb-1 text-[12px]">
            Last name
          </label>
          <Field
            name="lastName"
            id="lastName"
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          />
          <label htmlFor="phoneNumber" className="mb-1 text-[12px]">
            Phone number
          </label>
          <Field
            name="phoneNumber"
            id="phoneNumber"
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default ShareOffersForm;
