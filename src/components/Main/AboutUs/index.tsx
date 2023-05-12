import BlueButton from "@/components/UI/Buttons/BlueButton";
import React, { useEffect, useRef, useState } from "react";
import s from "./AboutUs.module.css";
import Benefit from "./Benefit";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section className={`${s.about} inner-shadow `}>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center custom-padding ">
          <div className="mt-20 md:mt-40 space-y-4">
            <h3 className="text-3xl text-primary-blue ">About Us</h3>
            <p className="max-w-[666px] text-primary-gray font-normal">
              Homeverse.io is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.
            </p>
            <BlueButton
              className="mt-10"
              onClick={() => {
                console.log("hello from about us");
              }}
            >
              Read More
            </BlueButton>
          </div>
          <div className="flex md:flex-col mt-[15%]  md:space-y-10">
            <Benefit
              top="500+"
              middle="Projects"
              bottom="Over 500 lexury villas for“Home Away From Home” experience"
            ></Benefit>
            <Benefit
              top="40+"
              middle="Locations"
              bottom="luxury villas and private holiday homes, from all across"
            ></Benefit>
            <Benefit
              top="24/7"
              middle="Help"
              bottom="24/7 Help service for all customers to guide and support"
            ></Benefit>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
