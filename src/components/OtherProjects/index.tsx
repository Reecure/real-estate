import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  fetchApartments,
  selectAllApartment,
  selectAllVisibleApartments,
} from "@/redux/features/getAllApartmentsSlice";
import { Project } from "@/types";
import React, { useEffect } from "react";
import AppartamentsCard from "../Main/Appartaments/AppartamentsCard";
import SideFilter from "../Main/Appartaments/SideFilter";
import TopFilter from "../Main/Appartaments/TopFilter";

type Props = {};

const OtherProjectsPage = (props: Props) => {
  const visibleProjects = useAppSelector(selectAllVisibleApartments);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);
  useEffect(() => {
    console.log(visibleProjects);
  }, [visibleProjects]);

  return (
    <div className="min-h-screen py-28 custom-padding">
      <div className="pb-10">
        <div className="block lg:hidden">
          <p>Filter</p>
        </div>
        <div>
          <TopFilter />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-10">
        <div className="hidden lg:block">
          <SideFilter />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {visibleProjects.map((project: Project, i) => {
            return <AppartamentsCard key={i} apart={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherProjectsPage;
