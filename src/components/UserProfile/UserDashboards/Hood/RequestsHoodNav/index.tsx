import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  setStatus,
  selectUserRequests,
  setTypes,
} from "@/redux/features/getUserRequestsSlice";
import React, { useState } from "react";

type Props = {};

const RequestsHoodNav = (props: Props) => {
  const [statusValue, setStatusValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  const dispatch = useAppDispatch();

  const statusHandler = (value: string) => {
    dispatch(setStatus(value));
  };

  const typeHandler = (value: string) => {
    dispatch(setTypes(value));
  };

  return (
    <div className="flex space-x-4">
      <select
        value={statusValue}
        onChange={(e) => {
          statusHandler(e.currentTarget.value);
          setStatusValue(e.currentTarget.value);
        }}
        className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
      >
        <option value={`All`}>All Statuses</option>
        <option value="In Progress">In Progress </option>
        <option value="New">New</option>
        <option value="Closed">Closed</option>
      </select>
      <select
        value={typeValue}
        onChange={(e) => {
          const val = e.currentTarget.value;
          typeHandler(val);
          setTypeValue(val);
        }}
        className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
      >
        <option value="All">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Condominium">Condominium</option>
        <option value="House">House</option>
      </select>
    </div>
  );
};

export default RequestsHoodNav;
