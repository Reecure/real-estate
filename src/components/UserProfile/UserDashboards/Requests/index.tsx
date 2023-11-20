import React, { FC, MouseEventHandler } from "react";
import RequestsTable from "./RequestsTable";

type Props = {
  className?: string;
};

const Requests: FC<Props> = ({ className }) => {
	return (
		<div className={`${className}`}>
			<RequestsTable />
		</div>
	);
};
 
export default Requests;
