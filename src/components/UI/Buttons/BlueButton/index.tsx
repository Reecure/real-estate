import React, { FC, ButtonHTMLAttributes } from "react";
import s from "./BlueButton.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
const BlueButton: FC<ButtonProps> = ({ className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`bg-primary-blue px-6 py-2 ${s.BlueButton} shadow-primary-blue rounded-[40px] cursor-pointer ${className}`}
    >
      {rest.children}
    </button>
  );
};

export default BlueButton;
