import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import logo from "../../../public/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { Paths } from "@/constants/paths";
import { Logged } from "@/components/Navbar/Logged";
import { HamburgerMenuOpen } from "@/components/Navbar/HamburgerMenuOpen";
import { ITab } from "@/types";
import UserActionsModal from "@/components/Modals/UserActionsModal";

const Tabs: ITab[] = [
  {
    name: "Home",
    path: Paths.Home,
  },
  {
    name: "About Us",
    path: Paths.AboutUs,
  },
  {
    name: "Other Projects",
    path: Paths.OtherProjects,
  },
];

const Navbar = () => {
  const [logged, setLogged] = useState(true);
  const [yPosition, setYPosition] = useState(0);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const handleUserMenuOpen = useCallback(() => {
    setUserMenuOpen((prev) => !prev);
  }, [setUserMenuOpen]);

  useEffect(() => {
    function handleScroll() {
      setYPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hamburgerMenuOpen]);

  return (
    <Container
      className={`fixed w-full px-2 sm:px-6 md:px-10 lg:px-16 xl:px-32 z-10 py-4 duration-300 ${
        yPosition > 0 ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className=" flex justify-between items-center">
        <Link href={Paths.Home}>
          <Image src={logo} alt="logo" width={95} height={56} />
        </Link>

        <div>
          <div className="hidden md:flex space-x-12">
            <ul className="flex items-center text-white space-x-12 font-semibold">
              {Tabs.map((item) => {
                return (
                  <Link key={item.name} href={item.path}>
                    <li>{item.name}</li>
                  </Link>
                );
              })}
            </ul>
            <div>
              <Logged
                logged={logged}
                userMenuOpen={userMenuOpen}
                handleUserMenuOpen={handleUserMenuOpen}
              />
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <div className="mr-5">
              <Logged
                logged={logged}
                userMenuOpen={userMenuOpen}
                handleUserMenuOpen={handleUserMenuOpen}
              />
            </div>
            <GiHamburgerMenu
              onClick={() => {
                setHamburgerMenuOpen((prev) => !prev);
              }}
              className="h-10 w-10 text-primary-text-dark-gray z-[100]"
            />
            <div>
              <HamburgerMenuOpen
                hamburgerMenuOpen={hamburgerMenuOpen}
                Tabs={Tabs}
              />
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`absolute top-20 right-10 xl:right-32 duration-300 ${
          userMenuOpen
            ? "translate-y-0 opacity-1"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <UserActionsModal />
      </div>
    </Container>
  );
};

export default Navbar;
