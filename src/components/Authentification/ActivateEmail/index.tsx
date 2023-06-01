import Image from "next/image";
import React from "react";
import confirmEmail from "../../../../public/confirmEmail.svg";
import GradientButton from "../../UI/Buttons/GradientButton";

type Props = {};

const ActivateEmail = (props: Props) => {
  return (
    <div className="max-w-[560px] py-10 bg-primary-dark-gray flex flex-col items-center justify-center rounded-[24px]">
      <Image src={confirmEmail} alt="reset" className="mb-8" />
      <p className="text-white mb-6">
        Thank you! Your email has been activated.
      </p>
      <GradientButton>Open Homeverse</GradientButton>
    </div>
  );
};

export default ActivateEmail;
