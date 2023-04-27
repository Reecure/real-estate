import React, { FC, MouseEventHandler } from "react";

type Props = {
  className?: string;
};

const Dashboard: FC<Props> = ({ className }) => {
  return <div className={`${className}`}>Dashboard</div>;
};

export default Dashboard;
