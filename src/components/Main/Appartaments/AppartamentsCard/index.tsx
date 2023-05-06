import GradientButton from "@/components/UI/Buttons/GradientButton";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import appart from "../../../../../public/appartamentTest.png";
import s from "./AppartamentsCard.module.css";
type Props = {
  apart: Project;
};

const AppartamentsCard: FC<Props> = ({ apart }) => {
  return (
    <div className="max-w-[577px] ">
      <div>
        <Image src={appart} alt="image" />
      </div>
      <div className="p-4 ">
        <div className="flex justify-between items-center mb-4">
          <p>{apart.price}</p>
          <Link href={`/apartment/${apart._id}`}>
            <GradientButton className={``}>View Details</GradientButton>
          </Link>
        </div>
        <div className="grid grid-cols-3 text-center border-[1px] border-primary-text-dark-gray rounded-lg py-3 ">
          <div className={`relative  ${s.bordered}`}>
            {apart.bedrooms} Bedrooms
          </div>
          <div className={`relative  ${s.bordered}`}>
            {apart.bathrooms} Bath
          </div>
          <div className={`relative ${s.bordered}`}>{apart.size} sq ft</div>
        </div>
      </div>
    </div>
  );
};

export default AppartamentsCard;
