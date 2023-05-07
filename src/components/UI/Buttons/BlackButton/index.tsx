import React, { FC, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BlackButton: FC<ButtonProps> = ({ className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`bg-black/60 px-6 py-2 rounded-[40px] cursor-pointer ${className}`}
    >
      {rest.children}
    </button>
  );
};

export default BlackButton;
