import { Field } from "formik";
import React, { FC } from "react";
import { IField } from "@/types";

type Props = {
  field: IField;
};

export const FieldTemplate: FC<Props> = ({ field }) => {
  return (
    <>
      <div className={`flex flex-col`}>
        <label
          htmlFor={field.id}
          className="mb-1 uppercase font-semibold text-[9px] tracking-[2px]"
        >
          {field.value}
        </label>
        <Field
          as={field.as}
          type={field.type}
          id={field.id}
          name={field.name}
          className="custom-field !bg-[#0E0E0E]"
        />
      </div>
    </>
  );
};
