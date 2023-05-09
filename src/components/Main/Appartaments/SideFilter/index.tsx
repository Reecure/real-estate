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
import { Formik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const SideFilter = (props: Props) => {
  const apart = useAppSelector(selectAllApartment);
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <div>
        <div>
          <label htmlFor="text">Size</label>
          <input
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
            onChange={(e) => {
              dispatch(setSize(e.currentTarget.value));
            }}
          />
        </div>
        <div></div>
        <div>
          <label htmlFor="bedrooms">bedrooms</label>
          <input
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
            onChange={(e) => {
              dispatch(setBedrooms(e.currentTarget.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="Floors">Floors</label>
          <input
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
            onChange={(e) => {
              dispatch(setFloors(e.currentTarget.value));
            }}
          />
        </div>
      </div>

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
