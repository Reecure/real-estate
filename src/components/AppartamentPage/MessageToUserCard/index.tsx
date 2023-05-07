import BlueButton from "@/components/UI/Buttons/BlueButton";
import { Project, User } from "@/types";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";

type Props = {
  apart: Project;
};

const MessageToUserCard: FC<Props> = ({ apart }) => {
  const [user, setUser] = useState(Object);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios
        .get("/api/getUserById?id=6453dfb9c8156bf9ee4a6f75")
        .then((data) => data.data);

      setUser(res.user);
    };
    fetchUser();
  }, []);

  return (
    <div className="max-w-[250px]">
      <article>
        <Image src={""} alt="avatar" className="mx-auto" />
        <p className="text-xl text-center mb-4">
          {user.firstName} {user.lastName}
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
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            type="text"
            className="bg-primary-dark-gray rounded-lg py-3 px-4"
          />
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            className="bg-primary-dark-gray rounded-lg py-3 px-4"
          />
          <label htmlFor="message">Message</label>
          <Field
            as="textarea"
            name="message"
            type="textarea"
            className="bg-primary-dark-gray rounded-lg min-h-[100px] py-3 px-4"
          />
          <div className="py-8">
            <BlueButton type="submit" className="w-full">
              Send Message
            </BlueButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MessageToUserCard;
