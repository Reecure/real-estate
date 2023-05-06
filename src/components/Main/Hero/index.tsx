import Container from "@/components/UI/Container";
import React from "react";
import s from "./Hero.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container className={`${s.hero} flex justify-start items-center `}>
      <div className="w-full px-10 md:px-16 lg:px-24  xl:px-32">
        <h1 className="max-w-4xl text-5xl  xl:text-[64px] font-bold">
          Find Your <span className="text-blue-400">Dream Home </span>with
          Crypto
        </h1>
      </div>
    </Container>
  );
};

export default Hero;
