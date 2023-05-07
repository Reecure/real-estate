import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="flex flex-col items-center space-y-5 md:space-y-0 md:flex-row md:justify-between custom-padding py-5 md:py-14 border-b-[1px]">
        <div>
          <Image src={logo} alt="logo" />
          <p className="max-w-[313px] mt-4 font-normal">
            Homeverse.io is a gated community with a great location. Located
            downtown, you’re within walking distance of Parks, and the...View
            More
          </p>
        </div>
        <div className="space-y-3 font-normal  ">
          <h4 className="text-2xl mb-4">Contact Us</h4>
          <p className="text-primary-text-dark-gray">
            Deam home villas San Diego, CA, USA
          </p>
          <p className="text-primary-text-dark-gray">025-777-3067</p>
          <p className="text-primary-text-dark-gray">admin@thehomeverse.io</p>
        </div>
        <div className=" max-w-[313px] w-full md:max-w-fit">
          <h4 className="text-2xl">Follow Us</h4>
          <div className="flex space-x-2 mt-4 ">
            <div className="w-8 h-8 rounded-lg bg-primary-dark-gray"></div>
            <div className="w-8 h-8 rounded-lg bg-primary-dark-gray"></div>
            <div className="w-8 h-8 rounded-lg bg-primary-dark-gray"></div>
          </div>
          <div className="mt-6">English - En</div>
        </div>
      </div>
      <div className="pt-8 pb-16 text-center text-primary-gray font-normal">
        © 2022 Dandelion | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
