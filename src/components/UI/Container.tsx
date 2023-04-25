import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={`max-w-[1440px]  mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
