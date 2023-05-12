import React, { FC, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const RedButton: FC<ButtonProps> = ({ className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`bg-primary-red px-6 py-2 rounded-[40px] cursor-pointer ${className}`}
    >
      {rest.children}
    </button>
  );
};

export default RedButton;
