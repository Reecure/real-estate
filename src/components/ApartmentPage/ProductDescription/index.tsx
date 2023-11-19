import { Project } from "@/types";
import React, { FC, useState } from "react";
import { BiBed, BiBath } from "react-icons/bi";
import { AiOutlineAppstore as Floor, AiOutlineCalendar } from "react-icons/ai";
import { IoIosResize } from "react-icons/io";

type Props = {
  apart: Project;
};

const defaultCardStyle = "flex items-center justify-center p-5 w-full border-[1px] border-white";

const ProjectDescription: FC<Props> = ({ apart }) => {

	return (
		<div className="text-white ">
			<section>
				<div className="grid grid-cols-3 sm:grid-cols-5 rounded-lg  text-base md:text-lg  xl:text-2xl ">
					<div className={`${defaultCardStyle} sm:rounded-l-xl`}>
						<BiBed className="mr-2" />
						{apart && apart.bedrooms}
					</div>
					<div className={defaultCardStyle}>
						<BiBath className="mr-2" />
						{apart && apart.bathrooms}
					</div>
					<div className={defaultCardStyle}>
						<Floor className="mr-2" />
						{apart && apart.floors}
					</div>
					<div className={defaultCardStyle}>
						<AiOutlineCalendar className="mr-2" />
						{apart && apart.yearBuilt}
					</div>
					<div className={`${defaultCardStyle} sm:rounded-r-xl`}>
						<IoIosResize className="mr-2" />
						{apart && apart.size}
					</div>
				</div>

			</section>
			<article className="pt-14">
				<h3 className="text-xl text-primary-blue my-5">Description</h3>
				<p className="text-primary-text-dark-gray">
					{apart?.description !== "" ? apart?.description : <p className={"text-2xl font-bold"}>Owner doesn`t add any description</p> }
				</p>
				<div></div>
			</article>
		</div>
	);
};

export default ProjectDescription;
