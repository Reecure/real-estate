import React, { FC, MouseEventHandler } from "react";
import s from "./BlueButton.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const BlueButton: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary-blue px-6 py-3 ${s.BlueButton} shadow-primary-blue rounded-lg cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default BlueButton;
