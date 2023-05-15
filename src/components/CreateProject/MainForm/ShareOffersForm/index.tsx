import React, { FC } from "react";
import { Field } from "formik";
import { IField } from "@/types";
import { FieldTemplate } from "@/components/Templates/FieldTemplate";

const Fields: IField[] = [
  {
    value: "First Name",
    name: "firstName",
    id: "firstName",
    type: "text",
  },
  {
    value: "Last Name",
    name: "lastName",
    id: "lastName",
    type: "text",
  },
  {
    value: "Email Address",
    name: "email",
    id: "email",
    type: "email",
  },
  {
    value: "Phone Number",
    name: "phoneNumber",
    id: "phoneNumber",
    type: "text",
  },
];

type Props = {};

const ShareOffersForm: FC<Props> = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        {Fields.map((item) => {
          return <FieldTemplate key={item.id} field={{ ...item }} />;
        })}
      </div>
    </>
  );
};

export default ShareOffersForm;
