import React from "react";
import GradientButton from "../../UI/Buttons/GradientButton";

type Props = {};

const ResetPassword = (props: Props) => {
  return (
    <div className="max-w-[560px] text-white p-10 rounded-3xl bg-primary-dark-gray">
      <h3 className="mb-10 text-4xl">Reset Password</h3>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-primary-text-dark-gray uppercase text-[9px] tracking-[0.21em] mb-1   "
        >
          New Password
        </label>
        <input type="text" className="px-4 py-3 rounded-lg bg-[#0E0E0E] mb-3" />
        <label
          htmlFor="password"
          className="text-primary-text-dark-gray uppercase text-[9px] tracking-[0.21em] mb-1   "
        >
          Confirm New Password
        </label>
        <input type="text" className="px-4 py-3 rounded-lg bg-[#0E0E0E] mb-8" />
      </div>
      <div className="text-center">
        <GradientButton className="rounded-full ">Save</GradientButton>
      </div>
    </div>
  );
};

export default ResetPassword;
