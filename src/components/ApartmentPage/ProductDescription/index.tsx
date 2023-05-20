import { Project } from "@/types";
import React, { FC, useState } from "react";
import SimilarListings from "./SimilarListings";
import { BiBed, BiBath } from "react-icons/bi";
import { AiOutlineAppstore as Floor, AiOutlineCalendar } from "react-icons/ai";
import { IoIosResize } from "react-icons/io";
import SimilarListingSwiper from "@/components/ApartmentPage/ProductDescription/SimilarListings/SimilarListingSwiper";

type Props = {
  apart: Project;
};

const ProjectDescription: FC<Props> = ({ apart }) => {
  const [visibleAllDescription, setVisibleAllDescription] = useState(false);

  return (
    <div className="text-white ">
      <section>
        <div className="hidden sm:grid grid-cols-5 rounded-lg border-white border-[1px] text-base md:text-lg  xl:text-2xl ">
          <div className="flex items-center justify-center p-5 w-full border-r-[1px] border-white">
            <BiBed className="mr-2" />
            {apart && apart.bedrooms}
          </div>
          <div className="flex items-center justify-center p-5 w-full border-r-[1px] border-white">
            <BiBath className="mr-2" />
            {apart && apart.bathrooms}
          </div>
          <div className="flex items-center justify-center p-5 w-full border-r-[1px] border-white">
            <Floor className="mr-2" />
            {apart && apart.floors}
          </div>
          <div className="flex items-center justify-center p-5 w-full border-r-[1px] border-white">
            <AiOutlineCalendar className="mr-2" />
            {apart && apart.yearBuilt}
          </div>
          <div className="flex items-center justify-center p-5 w-full">
            <IoIosResize className="mr-2" />
            {apart && apart.size}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5  sm:hidden text-2xl">
          <div className="flex justify-center">
            <BiBed className="mr-2" />
            {apart && apart.bedrooms}
          </div>
          <div className="flex justify-center">
            <BiBath className="mr-2" />
            {apart && apart.bathrooms}
          </div>
          <div className="flex justify-center">
            <Floor className="mr-2" />
            {apart && apart.floors}
          </div>
          <div className="flex justify-center">
            <AiOutlineCalendar className="mr-2" />
            {apart && apart.yearBuilt}
          </div>
          <div className="flex justify-center">
            <IoIosResize className="mr-2" />
            {apart && apart.size}
          </div>
        </div>
      </section>
      <article className="pt-14">
        <h3 className="text-xl text-primary-blue my-5">Description</h3>
        <p className="text-primary-text-dark-gray">
          {apart && apart.description}
          {/*(visibleAllDescription ? (*/}
          {/*<>{}</>*/}
          {/*) : (*/}
          {/*<>*/}
          {/*  {apart.description.slice(0, 600)}*/}
          {/*  <span*/}
          {/*      onClick={() => setVisibleAllDescription((prev) => !prev)}*/}
          {/*      className={`cursor-pointer`}*/}
          {/*  >*/}
          {/*        ...*/}
          {/*      </span>*/}
          {/*</>*/}
          {/*))*/}
        </p>
        <div></div>
      </article>
      <section>
        <h3 className="text-xl text-primary-blue my-5">Property Video</h3>
        <div>
          <iframe
            className="w-full min-h-[300px]"
            src=""
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
      <div>
        <h3 className="text-xl text-primary-blue my-9">Similar listings</h3>
        <SimilarListingSwiper />
      </div>
    </div>
  );
};

export default ProjectDescription;
