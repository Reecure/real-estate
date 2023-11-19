import Link from "next/link";
import React, { FC } from "react";
import { ITab } from "@/types";

type Props = {
  Tabs: ITab[];
  hamburgerMenuOpen: boolean;
};
export const HamburgerMenuOpen: FC<Props> = ({ Tabs, hamburgerMenuOpen }) => {
	return (
		<>
			<div
				className={`fixed top-0 left-0 w-full h-full bg-black -z-10 ${
					hamburgerMenuOpen ? "translate-x-0" : "translate-x-full"
				} duration-300`}
			>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<ul className="flex flex-col text-center text-white text-3xl space-y-4 font-semibold">
						{Tabs.map((item, i) => {
							return (
								<Link key={item.name} href={item.path}>
									<li>{item.name}</li>
								</Link>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};
