import { Project } from "@/types";
import Image from "next/image";
import React, { FC, useRef, useState } from "react";
import video from "../../../../public/Video.png";
import SimilarListings from "./SimilarListings";
import { BiBed, BiBath } from "react-icons/bi";
import { AiOutlineAppstore as Floor, AiOutlineCalendar } from "react-icons/ai";
import { IoIosResize } from "react-icons/io";

type Props = {
  apart: Project;
};

const ProjectDescription: FC<Props> = ({ apart }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayPause = (): void => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="text-white mt-10">
      <section className="flex justify-between rounded-lg border-white border-[1px] text-2xl ">
        <div className="flex items-center justify-center p-5 w-full border-r-[1px] border-whit">
          <BiBed className="mr-2" />
          {apart.bedrooms}
        </div>
        <div className="flex items-center justify-center p-5 w-full border-r-[1px] border-whit">
          <BiBath className="mr-2" />
          {apart.bathrooms}
        </div>
        <div className="flex items-center justify-center p-5 w-full border-r-[1px] border-whit">
          <Floor className="mr-2" />
          {apart.floors}
        </div>
        <div className="flex items-center justify-center p-5 w-full border-r-[1px] border-whit">
          <AiOutlineCalendar className="mr-2" />
          {apart.yearBuilt}
        </div>
        <div className="flex items-center justify-center p-5 w-full">
          <IoIosResize className="mr-2" />
          {apart.size}
        </div>
      </section>
      <article className="pt-14">
        <h3 className="text-xl text-primary-blue my-5">Description</h3>
        <p className="text-primary-text-dark-gray">
          Enchanting three bedroom, three bath home with spacious one bedroom,
          one bath cabana, in-laws quarters. Charming living area features
          fireplace and fabulous art deco details. Formal dining room.
          Remodelled kitchen with granite white cabinetry and stainless
          appliances. Lovely master bedroom has updated bath, beautiful view of
          the pool. Guest bedrooms have walk-in, cedar closets. Delightful
          backyard; majestic oaks surround the free form pool and expansive
          patio, wet bar and grill. Enchanting three bedroom.
        </p>
        <div></div>
      </article>
      <section>
        <h3 className="text-xl text-primary-blue my-5">Property Video</h3>
        <div>
          <iframe
            className="w-full min-h-[300px]"
            src="https://www.youtube.com/embed/u5oJARlJ4FU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
      <section>
        <h3 className="text-xl text-primary-blue my-5">Property on map</h3>
      </section>
      <div>
        <h3 className="text-xl text-primary-blue my-9">Similar listings</h3>
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

export default ProjectDescription;
