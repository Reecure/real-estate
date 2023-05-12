import { useAppDispatch } from "@/redux/app/hooks";
import { setFloors } from "@/redux/features/getAllApartmentsSlice";
import React from "react";
import SelectorForm from "../SelectorForm";

type Props = {};
const floors = ["1+", "2+", "3+"];

const FloorsFilter = (props: Props) => {
  const dispatch = useAppDispatch();
  const floorsHandler = (item: null | string) => {
    dispatch(setFloors(item));
  };
  return (
    <div>
      <SelectorForm arr={floors} title="Floors" handler={floorsHandler} />
    </div>
  );
};

export default FloorsFilter;
