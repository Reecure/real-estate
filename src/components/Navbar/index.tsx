import Container from "@/components/UI/Container";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import UserActions from "../Modals/UserActions";
import BlueButton from "../UI/Buttons/BlueButton";

type Props = {};

const Navbar = (props: Props) => {
  const { status } = useSession();
  const [logged, setLogged] = useState(true);
  const [yPosition, setYPosition] = useState(0);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setYPosition(window.scrollY);
    }
    if (status === "authenticated") {
      setLogged((prev) => (prev = true));
    } else {
      setLogged((prev) => (prev = false));
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [status]);
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
          <div>
            {logged ? (
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-text-dark-gray rounded-full cursor-pointer"></div>
                <div
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  className="w-10 h-10 rounded-full bg-primary-text-dark-gray  cursor-pointer"
                ></div>
              </div>
            ) : (
              <BlueButton
                onClick={() => {
                  console.log("hello from navbar");
                }}
              >
                Sign in
              </BlueButton>
            )}
          </div>
        </div>
      </div>
      {userMenuOpen && (
        <div className="absolute top-20 right-10 xl:right-32">
          <UserActions />
        </div>
      )}
    </Container>
  );
};

export default Navbar;
