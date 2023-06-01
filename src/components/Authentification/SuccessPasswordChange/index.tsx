import Image from "next/image";
import React from "react";
import changePassword from "../../../../public/changePassword.svg";
import GradientButton from "../../UI/Buttons/GradientButton";

type Props = {};

const SuccessPasswordChange = (props: Props) => {
  return (
    <div className="max-w-[560px] py-10 bg-primary-dark-gray flex flex-col items-center justify-center rounded-[24px]">
      <Image src={changePassword} alt="reset" className="mb-8" />
      <p className="text-white mb-6">
        Thank you! Your password has been changed.
      </p>
      <GradientButton>Open Homeverse</GradientButton>
    </div>
  );
};

export default SuccessPasswordChange;
