import React, { FC, MouseEventHandler } from "react";
import ProjectTable from "./ProjectsTable";

type Props = {
  className?: string;
};

const Projects: FC<Props> = ({ className }) => {
	return (
		<div className={`${className}`}>
			<ProjectTable />
		</div>
	);
};

export default Projects;
 