import React from "react";
import BlackButton from "../UI/Buttons/BlackButton";
import GradientButton from "../UI/Buttons/GradientButton";
import Container from "../UI/Container";
import AdditionalDetail from "./AdditionalDetail";

type Props = {};

const CreateProject = (props: Props) => {
  return (
    <Container className="text-white ">
      <div className="flex justify-between py-16">
        <h5>New Project</h5>
        <div className="space-x-3">
          <BlackButton className="rounded-[50px]">Back</BlackButton>
          <GradientButton className="rounded-[50px]">Create</GradientButton>
        </div>
      </div>
      <div className="grid grid-cols-[3fr_1fr] gap-10">
        <div>
          {/* Main inputs MLS ADDRESS etc... */}
          <div className="flex gap-10">
            <div className="flex flex-col w-full">
              <label htmlFor="firstname" className="mb-1 text-[12px]">
                mls number
              </label>
              <input
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
              <label htmlFor="lastname" className="mb-1 text-[12px]">
                Price
              </label>
              <input
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
              <label htmlFor="firstname" className="mb-1 text-[12px]">
                property type
              </label>
              <input
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastname" className="mb-1 text-[12px]">
                ADDress
              </label>
              <input
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
              <label htmlFor="firstname" className="mb-1 text-[12px]">
                neighbourhood
              </label>
              <input
                type="text"
                className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
              />
            </div>
          </div>

          {/* Crypto */}
          <div className="flex space-x-5">
            <div className="space-x-2">
              <input type="checkbox" />
              <label htmlFor="">I want explore selling as an NFT</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox" />
              <label htmlFor="">I’ll also accept cryptocurrencies</label>
            </div>
          </div>

          {/* Share offers with the seller */}
          <div>
            <h4>Share offers with the seller</h4>
            <div>
              <div className="flex gap-10">
                <div className="flex flex-col w-full">
                  <label htmlFor="lastname" className="mb-1 text-[12px]">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                  />
                  <label htmlFor="firstname" className="mb-1 text-[12px]">
                    Email address
                  </label>
                  <input
                    type="text"
                    className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="lastname" className="mb-1 text-[12px]">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                  />
                  <label htmlFor="firstname" className="mb-1 text-[12px]">
                    Phone number
                  </label>
                  <input
                    type="text"
                    className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div>
            <h5>Additional details</h5>
            <AdditionalDetail />
          </div>
        </div>

        <div className="min-w-[480px] h-96 bg-white/10"></div>
      </div>
    </Container>
  );
};

export default CreateProject;
