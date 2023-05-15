import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  fetchApartments,
  selectAllApartment,
  selectAllVisibleApartments,
} from "@/redux/features/getAllApartmentsSlice";
import { Project } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ApartmentsCard from "./AppartamentsCard";
import Filter from "./SideFilter";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";
import { Paths } from "@/constants/paths";

type Props = {};

const Apartments = (props: Props) => {
  const { data, loading } = useAppSelector(selectAllApartment);
  const visibleApartments = useAppSelector(selectAllVisibleApartments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  return (
    <div className="custom-padding mt-10">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        {visibleApartments.slice(0, 6).map((apart: Project) => {
          return <ApartmentsCard key={apart._id} apart={{ ...apart }} />;
        })}
      </div>
      <Link href={Paths.OtherProjects}>
        <div className="flex flex-col items-center space-y-3 justify-center ">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-gray cursor-pointer">
            <SlArrowDown className="text-black font-extrabold " />
          </div>
          <h3>View More</h3>
        </div>
      </Link>
    </div>
  );
};

export default Apartments;
