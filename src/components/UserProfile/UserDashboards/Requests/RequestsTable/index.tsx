"use client";

import React, { useEffect, useState } from "react";
import RequestsTableRaw from "./RequestsTableRaw";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  fetchUserRequests,
  selectTotalPages,
  selectUserRequests,
  selectVisibleRequests,
  setPage,
  setPerPage,
} from "@/redux/features/getUserRequestsSlice";
import { ApartmentRequest } from "../../../../../types/index";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
type Props = {};

const RequestsTable = (props: Props) => {
  const { loading, currentPage, perPage } = useAppSelector(selectUserRequests);
  const visibleRequests = useAppSelector(selectVisibleRequests);
  const totalPages = useAppSelector(selectTotalPages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserRequests());
  }, [dispatch]);

  const PageHandler = (page: number) => {
    dispatch(setPage(page));
  };

  const handlePerPage = (perPage: number) => {
    dispatch(setPerPage(perPage));
  };

  return (
    <>
      <div className="flex items-center justify-end space-x-5">
        <div className="flex space-x-1">
          <p className="text-2xl font-semibold">{currentPage}</p>
          <span className="text-2xl font-semibold">-</span>
          <p className="text-2xl font-semibold">{totalPages}</p>
        </div>
        <div className="space-x-3 flex">
          <button
            disabled={currentPage === 1}
            onClick={() => PageHandler(currentPage - 1)}
            className="flex items-center justify-center bg-[#0E0E0E] w-10 h-10 rounded-full border-[1px] border-white disabled:bg-transparent/25 disabled:border-white/10 disabled:text-whborder-white/disabled:border-white/10"
          >
            <SlArrowLeft className="text-xl mr-1" />
          </button>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => PageHandler(currentPage + 1)}
            className="flex items-center justify-center bg-[#0E0E0E] w-10 h-10 rounded-full border-[1px] border-white disabled:bg-transparent/25 disabled:border-white/10 disabled:text-whborder-white/disabled:border-white/10"
          >
            <SlArrowRight className="text-xl ml-1" />
          </button>
        </div>
        <div className="">
          <select
            value={perPage}
            onChange={(e) => {
              handlePerPage(Number(e.currentTarget.value));
            }}
            className=" py-2 px-2 bg-[#0E0E0E] rounded-lg"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
      <table className="text-white  w-full  ">
        <tbody>
          <tr className="text-primary-text-dark-gray">
            <td className="py-4 px-7">Name</td>
            <td className="px-1">Type</td>
            <td className="px-1">Status</td>
            <td className="px-1">Text</td>
            <td className="px-1">Data</td>
            <td className="px-1">User</td>
            <td className="px-1"></td>
            <td className="px-1"></td>
          </tr>
          {visibleRequests.map((item: ApartmentRequest, i) => {
            return (
              <RequestsTableRaw
                item={{ ...item }}
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-white/5" : "bg-primary-dark-gray"
                }`}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default RequestsTable;
