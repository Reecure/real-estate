import Image from "next/image";
import React from "react";
import video from "../../../../public/Video.png";
import SimilarListings from "./SimilarListings";

type Props = {};

const ProductDescription = (props: Props) => {
  return (
    <div className="text-white   mt-10">
      <div></div>
      <div>
        <h3>Description</h3>
        <p>
          Enchanting three bedroom, three bath home with spacious one bedroom,
          one bath cabana, in-laws quarters. Charming living area features
          fireplace and fabulous art deco details. Formal dining room.
          Remodelled kitchen with granite white cabinetry and stainless
          appliances. Lovely master bedroom has updated bath, beautiful view of
          the pool. Guest bedrooms have walk-in, cedar closets. Delightful
          backyard; majestic oaks surround the free form pool and expansive
          patio, wet bar and grill. Enchanting three bedroom,
        </p>
        <div></div>
      </div>
      <div>
        <h3>Property Video</h3>
        <Image src={video} alt="video" />
      </div>
      <div>
        <h3>Similar listings</h3>
        <div className="flex gap-8 overflow-hidden overflow-x-scroll">
          <SimilarListings />
          <SimilarListings />
          <SimilarListings />
          <SimilarListings />
          <SimilarListings />
          <SimilarListings />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
