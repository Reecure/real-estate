import Container from "@/components/UI/Container";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import BlueButton from "../UI/Buttons/BlueButton";

type Props = {};

const Navbar = (props: Props) => {
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setYPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container
      className={`fixed w-full px-2 sm:px-6 md:px-10 lg:px-16 xl:px-32 z-10 py-4 duration-300 ${
        yPosition > 0 ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className=" flex justify-between items-center">
        <div>
          <Image src={logo} alt="logo" width={95} height={56} />
        </div>
        <div className="flex space-x-12">
          <ul className="flex items-center text-white space-x-12 font-semibold">
            <li>Home</li>
            <li>About Us</li>
            <li>Other Projects</li>
          </ul>
          <BlueButton
            onClick={() => {
              console.log("hello from navbar");
            }}
          >
            Sign in
          </BlueButton>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
