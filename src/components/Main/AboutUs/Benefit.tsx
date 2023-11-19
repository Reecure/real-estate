import React, { FC } from "react";

type Props = {
  top: string;
  middle: string;
  bottom: string;
};

const Benefit: FC<Props> = ({ top, middle, bottom }) => {
	return (
		<div className="text-center space-y-2">
			<h5 className="text-primary-blue text-xl sm:text-3xl">{top}</h5>
			<p className="text-sm sm:text-base">{middle}</p>
			<p className="text-sm sm:text-base text-primary-text-dark-gray font-normal max-w-[267px]">
				{bottom}
			</p>
		</div>
	);
};

export default Benefit;
