import GradientButton from "@/components/UI/Button/GradientButton";
import Link from "next/link";
import React, { FC } from "react";
import ProjectsHoodNav from "./ProjectsHoodNav";
import RequestsHoodNav from "./RequestsHoodNav";

type Props = {
  sectionHandler: (id: number) => void;
  selectedSection: number;
};

const Hood: FC<Props> = ({ sectionHandler, selectedSection }) => {
	return (
		<div className="flex flex-col items-center lg:flex-row justify-between mt-10">
			<div>
				<ul className="flex gap-5">
					<li
						className={`text-2xl md:text-3xl cursor-pointer ${
							selectedSection === 0
								? "text-white"
								: "text-primary-text-dark-gray duration-150"
						}`}
						onClick={() => sectionHandler(0)}
					>
            Requests
					</li>
					<li
						className={`text-2xl md:text-3xl cursor-pointer ${
							selectedSection === 1
								? "text-white"
								: "text-primary-text-dark-gray duration-150"
						}`}
						onClick={() => sectionHandler(1)}
					>
            Projects
					</li>
				</ul>
			</div>
			<div>
				{selectedSection === 0 ? (
					<RequestsHoodNav />
				) : selectedSection === 1 ? (
					<>
						<ProjectsHoodNav />
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Hood;
