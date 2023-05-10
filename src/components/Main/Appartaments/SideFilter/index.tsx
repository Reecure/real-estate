import BlueButton from "@/components/UI/Buttons/BlueButton";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  selectAllApartment,
  setAcceptCrypto,
  setBathrooms,
  setBedrooms,
  setFloors,
  setPrice,
  setSellingNFT,
  setSize,
  setYearBuilt,
} from "@/redux/features/getAllApartmentsSlice";
import React, { useEffect, useState } from "react";
import BathroomsFilter from "./BathroomsFilter";
import BedroomsFilter from "./BedroomsFilter";
import FloorsFilter from "./FloorsFilter";
import SelectorForm from "./SelectorForm";
import SizeFilter from "./SizeFilter";

type Props = {};

const SideFilter = (props: Props) => {
  const apart = useAppSelector(selectAllApartment);
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-5 ">
      <SizeFilter />
      <BedroomsFilter />
      <BathroomsFilter />
      <FloorsFilter />

      <div>
        <label htmlFor="sellingNFT">Price</label>
        <input
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          onChange={(e) => {
            dispatch(setPrice(e.currentTarget.value));
          }}
        />
      </div>

      <div>
        <label htmlFor="sellingNFT">Year Built</label>
        <input
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          onChange={(e) => {
            dispatch(setYearBuilt(e.currentTarget.value));
          }}
        />
      </div>

      <div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => dispatch(setAcceptCrypto(e.currentTarget.checked))}
          />
          <label htmlFor="acceptCrypto">Accept Crypto</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => dispatch(setSellingNFT(e.currentTarget.checked))}
          />
          <label htmlFor="sellingNFT">Selling NFT</label>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
