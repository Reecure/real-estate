import React, { FC } from "react";
import { IField } from "@/types";
import { FieldTemplate } from "@/components/Templates/FieldTemplate";
import { CSSTransition } from "react-transition-group";
import s from "./AdditionalDetail.module.css";

const Fields: IField[] = [
  {
    value: "Accepted Currencies",
    id: "acceptedCurrencies",
    name: "acceptedCurrencies",
    type: "text",
  },
  {
    value: "Size",
    id: "size",
    name: "size",
    type: "text",
  },
  {
    value: "Bedrooms",
    id: "bedrooms",
    name: "bedrooms",
    type: "text",
  },
  {
    value: "Year Built",
    id: "yearBuilt",
    name: "yearBuilt",
    type: "text",
  },
  {
    value: "Bathrooms",
    id: "bathrooms",
    name: "bathrooms",
    type: "text",
  },
  {
    value: "Floors",
    id: "floors",
    name: "floors",
    type: "text",
  },
];

const BigFields: IField[] = [
  {
    value: "Description",
    type: "text",
    as: "textarea",
    id: "description",
    name: "description",
  },
  {
    value: "Agent Remarks",
    type: "text",
    as: "textarea",
    id: "agentRemarks",
    name: "agentRemarks",
  },
  {
    value: "Video link",
    type: "text",
    id: "videoLink",
    name: "videoLink",
  },
];

type Props = {
  isOpen: boolean;
};

const AdditionalDetail: FC<Props> = ({ isOpen }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={500}
      classNames={{
        enterActive: s.additionalShow,
        exitActive: s.additionalExit,
      }}
      mountOnEnter
      unmountOnExit
    >
      <div>
        <h5 className="text-2xl font-semibold pb-10">Features</h5>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-10`}>
          {Fields.map((item, i) => {
            return <FieldTemplate key={item.id} field={{ ...item }} />;
          })}
        </div>
        <div>
          {BigFields.map((item) => {
            return <FieldTemplate key={item.id} field={{ ...item }} />;
          })}
        </div>
      </div>
    </CSSTransition>
  );
};

export default AdditionalDetail;
