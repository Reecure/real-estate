import React, { FC, MouseEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const BlackButton: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black/60 px-6 py-2 rounded-[40px] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default BlackButton;
