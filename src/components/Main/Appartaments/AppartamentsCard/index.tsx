import GradientButton from "@/components/UI/Buttons/GradientButton";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { BiBed, BiBath } from "react-icons/bi";
import { Paths } from "@/constants/paths";

type Props = {
  apart: Project;
};

const ApartmentsCard: FC<Props> = ({ apart }) => {
  return (
    <div className="max-w-[577px] mx-auto bg-primary-dark-gray  rounded-xl">
      <div>
        <Image
          src={apart.poster}
          width={577}
          height={200}
          quality={100}
          alt="image"
          className={`rounded-xl`}
        />
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
        <div className="flex justify-between items-center text-md border-[2px] rounded-lg whitespace-nowrap">
          <div
            className={`flex justify-center items-center p-2 border-r-[2px] w-full`}
          >
            <BiBed className={`text-lg mr-1`} />
            {apart.bedrooms} Rooms
          </div>
          <div
            className={`flex justify-center items-center p-2 border-r-[2px] w-full `}
          >
            <BiBath className={`text-lg mr-1`} />
            {apart.bathrooms} Bath
          </div>
          <div className={`flex justify-center items-center p-2 w-full`}>
            {apart.size} sq ft
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentsCard;
