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
      <div className="flex justify-between items-center  border-t-[1px] border-primary-gray ">
        <div className="mx-auto border-r-[1px]  w-full flex justify-center py-3  border-primary-gray ">
          <p>4</p>
        </div>
        <div className="mx-auto border-r-[1px]  w-full flex justify-center py-3 border-primary-gray">
          <p>2</p>
        </div>
        <div className="mx-auto w-full flex justify-center py-3 ">
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarListings;
