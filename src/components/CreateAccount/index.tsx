import Image from "next/image";

import React from "react";
import logo from "../../../public/logo.png";
import GradientButton from "../UI/Buttons/GradientButton";
import Container from "../UI/Container";

type Props = {};

const CreateAccount = (props: Props) => {
  return (
    <Container
      className={`custom-padding text-white max-w-[560px] bg-primary-dark-gray p-10`}
    >
      <Image src={logo} alt="logo" />
      <h2>Create your Account</h2>
      <div className="flex flex-col">
        <label htmlFor="firstname">firstname</label>
        <input type="text" />
        <label htmlFor="lastname">lastname</label>
        <input type="text" />
        <label htmlFor="email">email</label>
        <input type="text" />
        <label htmlFor="phonenumber">phonenumber</label>
        <input type="text" />
      </div>
      <div className="flex flex-col items-start">
        <p>i want buy a property</p>
        <div className="flex flex-row-reverse ">
          <label htmlFor="property">Traditionality</label>
          <input type="checkbox" name="property" />
        </div>
        <div className="flex flex-row-reverse ">
          <label htmlFor="property">Via Crypto</label>
          <input type="checkbox" name="property" />
        </div>
        <div className="flex flex-row-reverse ">
          <label htmlFor="property">Aa an NFT</label>
          <input type="checkbox" name="property" />
        </div>
        <div className="flex flex-row-reverse ">
          <label htmlFor="property">Real Estate fraction</label>
          <input type="checkbox" name="property" />
        </div>
      </div>
      <div className="flex flex-col items-start">
        <p>Do you have an Agent ?</p>
        <div className="flex flex-row-reverse ">
          <label htmlFor="agent">Yes</label>
          <input type="checkbox" name="agent" />
        </div>
        <div className="flex flex-row-reverse ">
          <label htmlFor="agent">No</label>
          <input type="checkbox" name="agent" />
        </div>
        <div className="flex flex-row-reverse ">
          <label htmlFor="agent">
            I would like find an agent on homverse.io
          </label>
          <input type="checkbox" name="agent" />
        </div>
      </div>
      <div className="flex flex-col items-start">
        <p>What’s your budget ?</p>
        <div className="flex flex-row-reverse ">
          <label htmlFor="budget">Below $50K</label>
          <input type="radio" name="budget" />
        </div>
        <div className="flex flex-row-reverse ">
          <label htmlFor="budget">$50K - $200K</label>
          <input type="radio" name="budget" />
        </div>
        <div className="flex flex-row-reverse ">
          <label htmlFor="budget">$200K - $800K</label>
          <input type="radio" name="budget" />
        </div>
        <div className="flex flex-row-reverse ">
          <label htmlFor="budget">$800K - $3M</label>
          <input type="radio" name="budget" />
        </div>
        <div className="flex flex-row-reverse ">
          <label htmlFor="budget">Above $3M</label>
          <input type="radio" name="budget" />
        </div>
      </div>
      <GradientButton className="rounded-[30px] px-11 py-2">
        SUBMIT
      </GradientButton>
    </Container>
  );
};

export default CreateAccount;
