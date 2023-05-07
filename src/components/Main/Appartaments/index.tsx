import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  fetchApartments,
  selectAllApartment,
  selectAllVisibleApartments,
} from "@/redux/features/getAllApartmentsSlice";
import { Project } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AppartamentsCard from "./AppartamentsCard";
import Filter from "./Filter";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

type Props = {};

const Appartaments = (props: Props) => {
  const { data, loading } = useAppSelector(selectAllApartment);
  const visibleApartments = useAppSelector(selectAllVisibleApartments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);
  useEffect(() => {
    console.log(visibleApartments);
  }, [visibleApartments, data]);

  return (
    <div className="custom-padding">
      <div>
        <Filter />
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        {visibleApartments.map((apart: Project) => {
          return <AppartamentsCard key={apart._id} apart={{ ...apart }} />;
        })}
      </div>
      <Link href="/other-projects">
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

export default Appartaments;
