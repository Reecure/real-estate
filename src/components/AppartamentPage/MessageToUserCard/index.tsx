import BlueButton from "@/components/UI/Buttons/BlueButton";
import { Project } from "@/types";

import { Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { fetchUser, selectUser } from "@/redux/features/getUserByIdSlice";

type Props = {
  apart: Project;
};

const MessageToUserCard: FC<Props> = ({ apart }) => {
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser(apart.owner));
    console.log(apart.owner);
  }, [dispatch, apart]);

  return (
    <div className="w-full sm:max-w-[550px]">
      <article>
        <Image src={""} alt="avatar" className="mx-auto" />
        <p className="text-xl text-center mb-4">
          {user && user.firstName} {user && user.lastName}
        </p>
      </article>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="space-y-2 flex flex-col text-xs">
          <div className="flexflex-col">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                type="text"
                className="bg-primary-dark-gray rounded-lg py-3 px-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                className="bg-primary-dark-gray rounded-lg py-3 px-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                name="message"
                type="textarea"
                className="bg-primary-dark-gray rounded-lg min-h-[100px] py-3 px-4"
              />
            </div>
          </div>
          <div className="py-8 mx-auto">
            <BlueButton type="submit" className="max-w-[250px]">
              Send Message
            </BlueButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MessageToUserCard;
