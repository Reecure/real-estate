import React from "react";
import s from "./NewLabel.module.css";

const NewLabel = () => {
	return (
		<div className={"px-2 py-1 text-[9px] uppercase font-semibold max-w-fit rounded-full bg-gradient-to-r from-[rgba(254,172,109,1)] to-[rgba(174,97,237,1)]"}>
			<p>New</p>
		</div>
	);
};

export default NewLabel;
