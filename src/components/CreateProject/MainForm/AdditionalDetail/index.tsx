import { Field } from "formik";
import React from "react";

type Props = {};

const AdditionalDetail = (props: Props) => {
  return (
    <div>
      <div className="">
        <div className="flex gap-10">
          <div className="flex flex-col w-full">
            <label htmlFor="accepted_currencies" className="mb-1 text-[12px]">
              Accepted currencies
            </label>
            <Field
              id="accepted_currencies"
              name="accepted_currencies"
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
              <label htmlFor="year_built" className="mb-1 text-[12px]">
                Year built
              </label>
              <Field
                id="year_built"
                name="year_built"
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
        <div className="h-40 w-full bg-white/5"></div>
      </div>

      <div>
        <label htmlFor="agent_remarks">agent remarks</label>
        <div className="h-20 w-full bg-white/5"></div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="video_link" className="mb-1 text-[12px]">
          Video link
        </label>
        <Field
          id="video_link"
          name="video_link"
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
      </div>
    </div>
  );
};

export default AdditionalDetail;
