import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: Themes
    className?: string,
    children: React.ReactNode
}

export enum Themes {
    BLACK = "bg-black/60",
    BLUE = "bg-primary-blue shadow-blueButtonShadow",
    GRADIENT = "bg-gradient-to-r from-[rgba(254,172,109,1)] to-[rgba(174,97,237,1)] shadow-gradientButtonShadow",
    RED = "bg-primary-red"
}

const Button: FC<ButtonProps> = ({theme, children, className, ...otherProps }) => {
	return (
		<button
			{...otherProps}
			className={`${theme}   px-6 py-2 rounded-[40px] cursor-pointer ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;