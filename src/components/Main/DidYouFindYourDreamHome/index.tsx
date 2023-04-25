import BlueButton from "@/components/UI/Buttons/BlueButton";
import React from "react";

type Props = {};

const DidYouFindYourDreamHome = (props: Props) => {
  return (
    <div className="flex justify-between items-center custom-padding py-52">
      <div className=" max-w-[610px]">
        <h4 className="font-bold text-[64px] leading-tight mb-4">
          Did You Find Your
          <span className="text-primary-blue"> Dream Home?</span>{" "}
        </h4>
        <p className="text-primary-text-dark-gray text-[32px]">
          Thank you for getting in touch! if you find your dream home connect
          with us
        </p>
      </div>
      <div>
        <div className="flex mb-16 ">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border-b-[1px] mr-4"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="bg-transparent border-b-[1px]"
          />
        </div>
        <div className="flex mb-16">
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-transparent border-b-[1px] mr-4"
          />
          <input
            type="text"
            placeholder="Interested in"
            className="bg-transparent border-b-[1px]"
          />
        </div>
        <div className="mb-16">
          <input
            type="text"
            placeholder="Message"
            className="bg-transparent border-b-[1px] w-full"
          />
        </div>

        <BlueButton>Submit</BlueButton>
      </div>
    </div>
  );
};

export default DidYouFindYourDreamHome;
