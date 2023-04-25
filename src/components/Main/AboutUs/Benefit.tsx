import React, { FC } from "react";

type Props = {
  top: string;
  middle: string;
  bottom: string;
};

const Benefit: FC<Props> = ({ top, middle, bottom }) => {
  return (
    <div className="text-center space-y-2">
      <h5 className="text-primary-blue text-3xl">{top}</h5>
      <p>{middle}</p>
      <p className="text-primary-text-dark-gray font-normal max-w-[267px]">
        {bottom}
      </p>
    </div>
  );
};

export default Benefit;
