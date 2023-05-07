import React, { FC, ButtonHTMLAttributes } from "react";
import s from "./GradientButton.module.css";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const GradientButton: FC<ButtonProps> = ({ className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={` px-6 py-2 ${s.btnGradient} rounded-[40px] cursor-pointer ${className}`}
    >
      {rest.children}
    </button>
  );
};

export default GradientButton;
