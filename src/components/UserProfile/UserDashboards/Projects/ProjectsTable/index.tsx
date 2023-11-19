"use client";

import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
	fetchUserProjects,
	selectProjects,
	selectTotalPages,
	selectVisibleProjects,
	setPage,
	setPerPage,
} from "@/redux/features/getUserProjectsSlice";
import { Project } from "@/types";
import React, { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import ProjectTableRaw from "./ProjectTableRaw";

type Props = {};

const ProjectTable = (props: Props) => {
	const { currentPage, perPage } = useAppSelector(selectProjects);
	const dispatch = useAppDispatch();
	const visibleProjects = useAppSelector(selectVisibleProjects);
	const totalPages = useAppSelector(selectTotalPages);

	useEffect(() => {
		dispatch(fetchUserProjects());
	}, [dispatch]);

	const pageHandler = (page: number) => {
		dispatch(setPage(page));
	};
	const handlePerPage = (value: number) => {
		dispatch(setPerPage(value));
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
						onClick={() => {
							console.log(currentPage);

							pageHandler(currentPage - 1);
						}}
						className="flex items-center justify-center bg-[#0E0E0E] w-10 h-10 rounded-full border-[1px] border-white disabled:bg-transparent/25 disabled:border-white/10 disabled:text-whborder-white/disabled:border-white/10"
					>
						<SlArrowLeft className="text-xl mr-1" />
					</button>
					<button
						disabled={currentPage === totalPages || totalPages === 0}
						onClick={() => pageHandler(currentPage + 1)}
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
			<div className="overflow-x-auto ">
				<table className="text-white  w-full  ">
					<tbody>
						<tr className="text-primary-text-dark-gray">
							<td className="py-4 px-7 sticky left-0 z-[1] bg-black">Name</td>
							<td className="px-1">Type</td>
							<td className="px-1">Size</td>
							<td className="px-1">Price</td>
							<td className="px-1">Creation Data</td>
						</tr>
						{visibleProjects.map((item: Project, i) => {
							return (
								<ProjectTableRaw
									key={item._id}
									item={{ ...item }}
									className={`${
										i % 2 === 0 ? "bg-[#0A0A0A]" : "bg-primary-dark-gray"
									}`}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ProjectTable;
