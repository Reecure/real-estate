import GradientButton from "@/components/UI/Buttons/GradientButton";
import Image from "next/image";
import React from "react";
import appart from "../../../../../public/appartamentTest.png";
import s from "./AppartamentsCard.module.css";
type Props = {};

const AppartamentsCard = (props: Props) => {
  return (
    <div className="max-w-[577px] ">
      <div>
        <Image src={appart} alt="image" />
      </div>
      <div className="p-4 ">
        <div className="flex justify-between items-center mb-4">
          <p>100.000$</p>
          <GradientButton className={``}>View Details</GradientButton>
        </div>
        <div className="grid grid-cols-3 text-center border-[1px] border-primary-text-dark-gray rounded-lg py-3 ">
          <div className={`relative  ${s.bordered}`}>1 Bedrooms</div>
          <div className={`relative  ${s.bordered}`}>1 Bath</div>
          <div className={`relative ${s.bordered}`}>535 sq ft</div>
        </div>
      </div>
    </div>
  );
};

export default AppartamentsCard;
