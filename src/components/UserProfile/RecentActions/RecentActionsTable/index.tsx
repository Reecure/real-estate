"use client";

import React, { useEffect, useState } from "react";
import RecentTableRaw from "./RecentTableRaw";

type Props = {};

const RecentActionsTable = (props: Props) => {
	return (
		<div>
			<div className="mt-12">
				<h4 className="text-2xl text-white font-semibold">Recent Action</h4>
			</div>
			<div className="overflow-x-auto ">
				<table className="text-white  w-full  ">
					<thead>
						<tr className="text-primary-text-dark-gray">
							<td className="py-4 px-7  sticky left-0 z-[1] bg-black">
                Project Name
							</td>
							<td className="px-1">Project Size</td>
							<td className="px-1">Price</td>
							<td className="px-1">date</td>
							<td className="px-1">Owner</td>
						</tr>
					</thead>
					<tbody>
						{Array(6)
							.fill(null)
							.map((item, i) => {
								return (
									<RecentTableRaw
										key={i}
										className={`${
											i % 2 === 0 ? "bg-[#0E0E0E]" : "bg-primary-dark-gray"
										}  `}
									/>
								);
							})}
					</tbody>
				</table>{" "}
			</div>
		</div>
	);
};

export default RecentActionsTable;
