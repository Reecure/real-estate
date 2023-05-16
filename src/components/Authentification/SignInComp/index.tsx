import React from "react";
import GradientButton from "../../UI/Buttons/GradientButton";
import Link from "next/link";
import { Paths } from "@/constants/paths";

type Props = {};

const SignInComp = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[560px] text-white p-10 rounded-3xl bg-primary-dark-gray">
      <h3 className="mb-10 text-4xl">Sign In</h3>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-primary-text-dark-gray uppercase text-[9px] tracking-[0.21em] mb-1   "
        >
          Email
        </label>
        <input type="text" className="px-4 py-3 rounded-lg bg-[#0E0E0E] mb-3" />
        <label
          htmlFor="password"
          className="text-primary-text-dark-gray uppercase text-[9px] tracking-[0.21em] mb-1   "
        >
          Password
        </label>
        <input type="text" className="px-4 py-3 rounded-lg bg-[#0E0E0E] mb-8" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          Don`t have an account{" "}
          <Link href={Paths.SignUp} className={`underline text-primary-blue`}>
            Sign Up
          </Link>
        </div>

        <GradientButton className="rounded-full ">Sign In</GradientButton>
      </div>
    </div>
  );
};

export default SignInComp;
