import { Field } from "formik";
import React from "react";

type Props = {};

const AdditionalDetail = (props: Props) => {
  return (
    <div>
      <div className="">
        <div className="flex gap-10">
          <div className="flex flex-col w-full">
            <label htmlFor="acceptedCurrencies" className="mb-1 text-[12px]">
              Accepted currencies
            </label>
            <Field
              id="acceptedCurrencies"
              name="acceptedCurrencies"
              type="text"
              className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
            />
            <label htmlFor="size" className="mb-1 text-[12px]">
              Size
            </label>
            <Field
              id="size"
              name="size"
              type="text"
              className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div>
          <div className="flex gap-10">
            <div className="flex flex-col w-full">
              <label htmlFor="bedrooms" className="mb-1 text-[12px]">
                Bedrooms
              </label>
              <Field
                id="bedrooms"
                name="bedrooms"
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
              <label htmlFor="yearBuilt" className="mb-1 text-[12px]">
                Year built
              </label>
              <Field
                id="yearBuilt"
                name="yearBuilt"
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="bathrooms" className="mb-1 text-[12px]">
                Bathrooms
              </label>
              <Field
                id="bathrooms"
                name="bathrooms"
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
              <label htmlFor="floors" className="mb-1 text-[12px]">
                Floors
              </label>
              <Field
                id="floors"
                name="floors"
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <Field
          id="description"
          name="description"
          className="h-40 w-full bg-white/5"
        ></Field>
      </div>

      <div>
        <label htmlFor="agentRemarks">agent remarks</label>
        <Field
          id="agentRemarks"
          name="agentRemarks"
          className="h-20 w-full bg-white/5"
        ></Field>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="videoLink" className="mb-1 text-[12px]">
          Video link
        </label>
        <Field
          id="videoLink"
          name="videoLink"
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
      </div>
    </div>
  );
};

export default AdditionalDetail;
