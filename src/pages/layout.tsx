import Navbar from "@/components/Navbar";
import Container from "@/components/UI/Container";
import React, { FC } from "react";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import {store} from "@/redux/app/store";
import {Provider} from "react-redux";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout: FC<Props> = ({ children }) => {
	return (
        <Provider store={store}>
			<Container className={`${montserrat.className} text-white font-semibold`}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</Container>
		</Provider>
	);
};

export default Layout;
