import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  fetchApartments,
  selectAllApartment,
  selectAllVisibleApartments,
} from "@/redux/features/getAllApartmentsSlice";
import { Project } from "@/types";
import React, { useEffect, useMemo, useState } from "react";
import ApartmentsCard from "../Main/Appartaments/AppartamentsCard";
import SideFilter from "../Main/Appartaments/SideFilter";
import TopFilter from "../Main/Appartaments/TopFilter";
import BlueButton from "../UI/Buttons/BlueButton";
import ApartmentCardSkeleton from "@/components/Main/Appartaments/ApartmentCardSkeleton";

const OtherProjectsPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const visibleProjects = useAppSelector(selectAllVisibleApartments);
  const { loading } = useAppSelector(selectAllApartment);
  const dispatch = useAppDispatch();

  const resizeHandler = () => {
    if (window.innerWidth >= 1024) {
      setFilterOpen(false);
    }
  };

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="relative ">
      <div className={`py-28 custom-padding`}>
        <div className="flex lg:hidden   items-center bg-[#0e0e0e] mb-10 p-3 rounded-lg">
          <div className="w-[30%] md:w-[40%] lg:w-[65%] ">
            <BlueButton
              onClick={() => setFilterOpen((prev) => !prev)}
              className="block lg:hidden  max-w-[230px] text-white py-3 px-2 mb-5 bg-black rounded-lg "
            >
              Filter
            </BlueButton>
          </div>
          <div className=" w-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-10">
          <div className="hidden lg:block">
            <SideFilter />
          </div>
          <div className="grid grid-cols-1 grid-rows-[min-content] md:grid-cols-2 gap-10 ">
            {loading
              ? Array(6)
                  .fill(null)
                  .map((_, i) => {
                    return <ApartmentCardSkeleton key={i} />;
                  })
              : visibleProjects.map((project: Project, i) => {
                  return <ApartmentsCard key={i} apart={project} />;
                })}
          </div>
        </div>
      </div>
      {filterOpen && (
        <div className="absolute flex top-0 left-0 w-full h-full !min-w-full overflow-hidden">
          <div className="w-1/2 min-h-full min-w-fit py-24 bg-black px-3 z-[10] overflow-y-auto">
            <SideFilter />
          </div>
          <div
            className="w-full h-full bg-white/10"
            onClick={(e) => {
              setFilterOpen((prev) => !prev);
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default OtherProjectsPage;
