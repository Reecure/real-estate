import React, { FC, MouseEventHandler } from "react";
import s from "./GradientButton.module.css";
type Props = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const GradientButton: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` px-6 py-3 ${s.btnGradient} rounded-[40px] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
