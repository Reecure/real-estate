import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import UserActions from "../Modals/UserActions";
import BlueButton from "../UI/Buttons/BlueButton";
import { TbBellRingingFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
type Props = {};

const Navbar = (props: Props) => {
  const [logged, setLogged] = useState(true);
  const [yPosition, setYPosition] = useState(0);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setYPosition(window.scrollY);
    }
    function handleStopScroll(event: any) {
      if (hamburgerMenuOpen) {
        event.preventDefault();
      }
    }
    window.addEventListener("scroll", handleStopScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleStopScroll);
    };
  }, [hamburgerMenuOpen]);
  return (
    <Container
      className={`fixed w-full px-2 sm:px-6 md:px-10 lg:px-16 xl:px-32 z-10 py-4 duration-300 ${
        yPosition > 0 ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className=" flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={95} height={56} />
        </Link>
        <div>
          <div className="hidden md:flex space-x-12">
            <ul className="flex items-center text-white space-x-12 font-semibold">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/">
                <li>About Us</li>
              </Link>
              <Link href="/other-projects">
                <li>Other Projects</li>
              </Link>
            </ul>
            <div>
              {logged ? (
                <div className="flex items-center space-x-3">
                  <Link href="/user-profile/dashboards?section=1">
                    <TbBellRingingFilled className="w-6 h-6 text-primary-text-dark-gray" />
                  </Link>
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
          <div className="flex items-center md:hidden">
            <div className="mr-5">
              {logged ? (
                <div className="flex items-center space-x-3">
                  <Link href="/user-profile/dashboards?section=1">
                    <TbBellRingingFilled className="w-6 h-6 text-primary-text-dark-gray" />
                  </Link>
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
            <GiHamburgerMenu
              onClick={() => {
                setHamburgerMenuOpen((prev) => !prev);
              }}
              className="h-10 w-10 text-primary-text-dark-gray z-[100]"
            />
            {hamburgerMenuOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <ul className="flex flex-col text-center text-white text-3xl space-y-4 font-semibold">
                    <Link href="/">
                      <li>Home</li>
                    </Link>
                    <Link href="/">
                      <li>About Us</li>
                    </Link>
                    <Link href="/">
                      <li>Other Projects</li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {userMenuOpen && (
        <div className="absolute top-20 right-10 xl:right-32">
          <UserActions />
        </div>
      )}
    </Container>
  );
};

export default Navbar;
