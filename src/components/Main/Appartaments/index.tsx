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
      <div className="grid grid-cols-2 gap-4">
        {visibleApartments.map((apart: Project) => {
          return <AppartamentsCard key={apart._id} apart={{ ...apart }} />;
        })}
      </div>
    </div>
  );
};

export default Appartaments;
