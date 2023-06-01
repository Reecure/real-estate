import { useAppDispatch } from "@/redux/app/hooks";
import { setBathrooms } from "@/redux/features/getAllApartmentsSlice";
import React from "react";
import SelectorForm from "../SelectorForm";

type Props = {};

const bathrooms = ["1+", "2+", "3+"];

const BathroomsFilter = (props: Props) => {
  const dispatch = useAppDispatch();
  const bathroomsHandler = (item: null | string) => {
    dispatch(setBathrooms(item));
  };

  return (
    <div>
      <SelectorForm
        arr={bathrooms}
        title="Bathrooms"
        handler={bathroomsHandler}
      />
    </div>
  );
};

export default BathroomsFilter;
