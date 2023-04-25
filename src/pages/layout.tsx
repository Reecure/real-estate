import Navbar from "@/components/Navbar";
import Container from "@/components/UI/Container";
import React, { FC } from "react";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Container className={`${montserrat.className} text-white font-semibold`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
