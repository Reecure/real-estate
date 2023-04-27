import React, { FC, MouseEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const RedButton: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary-red px-6 py-3 rounded-lg cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default RedButton;
