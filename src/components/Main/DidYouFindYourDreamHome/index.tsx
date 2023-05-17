import BlueButton from "@/components/UI/Buttons/BlueButton";
import { Field, Form, Formik } from "formik";
import React from "react";
import { IField } from "@/types";

type Props = {};

const Fieds: IField[] = [
  {
    id: "firstName",
    name: "firstName",
    type: "text",
    value: "First Name",
  },
  {
    id: "email",
    name: "email",
    type: "text",
    value: "Your Email",
  },
  {
    id: "phoneNumber",
    name: "phoneNumber",
    type: "text",
    value: "Phone Number",
  },
  {
    id: "interested",
    name: "interested",
    type: "text",
    value: "Interested In",
  },
];

const DidYouFindYourDreamHome = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row sm:justify-between md:items-center custom-padding py-20 lg:py-52">
      <div className="max-w-[610px] md:max-w-[400px] lg:max-w-[610px] ">
        <h4 className="font-bold text-5xl xl:text-[64px] leading-tight mb-4">
          Did You Find Your
          <span className="text-primary-blue"> Dream Home?</span>{" "}
        </h4>
        <p className=" my-5 md:my-0 text-primary-text-dark-gray text-lg md:text-xl  lg:text-2xl xl:text-[32px]">
          Thank you for getting in touch! if you find your dream home connect
          with us
        </p>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          phoneNumber: "",
          interested: "",
          message: "",
        }}
        onSubmit={() => {}}
      >
        <Form className=" ">
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5`}>
            {Fieds.map((item) => {
              return (
                <div key={item.id}>
                  <Field
                    type={item.type}
                    name={item.name}
                    placeholder={item.value}
                    className="bg-transparent border-b-[1px] mr-4 focus:outline-none w-full"
                  />
                </div>
              );
            })}
          </div>
          <div className="mb-16 mt-5 ">
            <Field
              type="text"
              name="message"
              placeholder="Message"
              className="bg-transparent border-b-[1px] focus:outline-none w-full max-w-[600px]"
            />
          </div>

          <BlueButton>Submit</BlueButton>
        </Form>
      </Formik>
    </div>
  );
};

export default DidYouFindYourDreamHome;
