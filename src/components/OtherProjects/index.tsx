import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  fetchApartments,
  selectAllApartment,
  selectAllVisibleApartments,
} from "@/redux/features/getAllApartmentsSlice";
import { Project } from "@/types";
import React, { useEffect } from "react";
import AppartamentsCard from "../Main/Appartaments/AppartamentsCard";

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
    <div className="min-h-screen py-32">
      <div className="grid grid-cols-2 gap-10">
        {visibleProjects.map((project: Project, i) => {
          return <AppartamentsCard key={i} apart={project} />;
        })}
      </div>
    </div>
  );
};

export default OtherProjectsPage;
