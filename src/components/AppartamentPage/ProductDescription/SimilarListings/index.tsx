import Image from "next/image";
import React from "react";
import image from "../../../../../public/SimilarListings.png";

type Props = {};

const SimilarListings = (props: Props) => {
  return (
    <div className="min-w-[336px] bg-primary-dark-gray rounded-lg">
      <Image src={image} alt="image" className="rounded-lg" />
      <div className="p-5">
        <h4>Malto House</h4>
      </div>
      <div className="flex justify-between items-center py-5 border-t-[1px] border-primary-gray ">
        <div className="mx-auto">4</div>
        <div className="mx-auto">2</div>
        <div className="mx-auto">2</div>
      </div>
    </div>
  );
};

export default SimilarListings;
