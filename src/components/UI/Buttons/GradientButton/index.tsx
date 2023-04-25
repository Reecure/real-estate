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
      className={`bg-primary-blue px-6 py-3 ${s.btnGradient} shadow-primary-blue rounded-lg cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
