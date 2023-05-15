import React from "react";
import { Field } from "formik";
import { IField } from "@/types";
import { FieldTemplate } from "@/components/Templates/FieldTemplate";

const Fields: IField[] = [
  {
    name: "mlsNumber",
    value: "Mls Number",
    id: "mlsNumber",
    type: "text",
  },
  {
    value: "Address",
    name: "address",
    id: "address",
    type: "text",
  },
  {
    value: "Price",
    name: "price",
    id: "price",
    type: "text",
  },
  {
    value: "Neighbourhood",
    name: "neighbourhood",
    id: "neighbourhood",
    type: "text",
  },
  {
    value: "Property Type",
    name: "propertyType",
    id: "propertyType",
    type: "text",
  },
];

type Props = {};

const MainInfo = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
      {Fields.map((item) => {
        return <FieldTemplate key={item.id} field={{ ...item }} />;
      })}
    </div>
  );
};

export default MainInfo;
