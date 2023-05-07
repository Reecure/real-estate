import BlueButton from "@/components/UI/Buttons/BlueButton";
import { Field, Form, Formik } from "formik";
import React from "react";

type Props = {};

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
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0   max-w-[600px]">
            <Field
              type="text"
              name="firstName"
              placeholder="Your Name"
              className="bg-transparent border-b-[1px] mr-4 focus:outline-none w-full"
            />
            <Field
              type="text"
              name="email"
              placeholder="Your Email"
              className="bg-transparent border-b-[1px] focus:outline-none w-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-5 max-w-[600px]">
            <Field
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="bg-transparent border-b-[1px] mt-5 mr-4 focus:outline-none w-full"
            />
            <Field
              type="text"
              name="interested"
              placeholder="Interested in"
              className="bg-transparent border-b-[1px] focus:outline-none w-full"
            />
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
