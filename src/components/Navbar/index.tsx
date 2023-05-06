import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import UserActions from "../Modals/UserActions";
import BlueButton from "../UI/Buttons/BlueButton";
import { TbBellRingingFilled } from "react-icons/tb";
type Props = {};

const Navbar = (props: Props) => {
  const [logged, setLogged] = useState(true);
  const [yPosition, setYPosition] = useState(0);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
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
      <nav className=" flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={95} height={56} />
        </Link>
        <div className="flex space-x-12">
          <ul className="flex items-center text-white space-x-12 font-semibold">
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
