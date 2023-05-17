import GradientButton from "@/components/UI/Buttons/GradientButton";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import appart from "../../../../../public/appartamentTest.png";
import { Paths } from "@/constants/paths";

type Props = {
  apart: Project;
};

const ApartmentsCard: FC<Props> = ({ apart }) => {
  return (
    <div className="max-w-[577px] mx-auto">
      <div>
        <Image src={appart} alt="image" />
      </div>
      <div className="p-4 ">
        <div className="flex justify-between items-center mb-4">
          <p>{apart.price}$</p>
          <Link href={`${Paths.Apartment}/${apart._id}`}>
            <GradientButton className={``} onClick={() => {}}>
              View Details
            </GradientButton>
          </Link>
        </div>
        <div className="flex justify-between items-center border-[2px] rounded-lg whitespace-nowrap">
          <div
            className={`flex justify-center p-2 md:p-5 border-r-[2px] w-full`}
          >
            {apart.bedrooms} Bedrooms
          </div>
          <div
            className={`flex justify-center p-2 md:p-5 border-r-[2px] w-full `}
          >
            {apart.bathrooms} Bath
          </div>
          <div className={`flex justify-center p-2 md:p-5 w-full`}>
            {apart.size} sq ft
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentsCard;
