import { User } from "@/types";
import { Field, Form, Formik } from "formik";
import React, { FC, useState, useEffect } from "react";
import BlueButton from "../../UI/Buttons/BlueButton";
import GradientButton from "../../UI/Buttons/GradientButton";
import { CSSTransition } from "react-transition-group";
import s from "../ModalsTransition.module.css";
import DeleteProfileModal from "@/components/Modals/DeleteProfileModal";

type Props = {
  userEditModalOpen: boolean;
  setUserEditModalOpen: (arg: boolean) => void;
  className?: string;
  user: User;
};

const EditProfile: FC<Props> = ({
  setUserEditModalOpen,
  userEditModalOpen,
  className,
  user,
}) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  console.log(user);

  useEffect(() => {
    if (deleteOpen) {
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.body.scrollTop = 0;
    } else {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [deleteOpen]);

  return (
    <>
      <CSSTransition
        in={userEditModalOpen}
        classNames={{
          enterActive: s.modalActive,
          exitActive: s.modalExit,
        }}
        timeout={500}
        unmountOnExit
        mountOnEnter
      >
        <dialog
          open
          className={`${className} ${
            deleteOpen ? "pointer-events-none opacity-0" : ""
          } max-w-[560px] p-10 rounded-[24px] shadow-xl shadow-white/30 text-white bg-[#0A0A0A] z-10`}
        >
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-4xl">Edit Profile</h4>
            <button onClick={() => setUserEditModalOpen(false)}>x</button>
          </div>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              currentPassword: "",
              newPassword: "",
              confitmNewPassword: "",
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <div className="flex flex-col sm:flex-row items-center sm:mb-10">
                <div className="mr-10">
                  <div className="w-28 h-28 rounded-full bg-slate-600"></div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="firstName" className="mb-1 text-[12px]">
                    Firstname
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder={user.firstName}
                    className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                  />
                  <label htmlFor="lastName" className="mb-1 text-[12px]">
                    Lastname
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder={user.lastName}
                    className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                  />
                </div>
              </div>
              <div className="mb-10">
                <label htmlFor="firstname" className="mb-1 text-[12px]">
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  placeholder={user.email}
                  className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                />
                <label htmlFor="currentPassword" className="mb-1 text-[12px]">
                  Current Password
                </label>
                <Field
                  name="currentPassword"
                  type="password"
                  className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                />
                <label htmlFor="newPassword" className="mb-1 text-[12px]">
                  New Password
                </label>
                <Field
                  name="newPassword"
                  type="password"
                  className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                />
                <label
                  htmlFor="confitmNewPassword"
                  className="mb-1 text-[12px]"
                >
                  Confirm New Password
                </label>
                <Field
                  name="confitmNewPassword"
                  type="password"
                  className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
                />
              </div>
              <div className="flex justify-between space-x-6">
                <BlueButton
                  type="button"
                  onClick={() => setDeleteOpen((prev) => !prev)}
                >
                  Delete account
                </BlueButton>
                <GradientButton type="submit">Save</GradientButton>
              </div>
            </Form>
          </Formik>
        </dialog>
      </CSSTransition>
      <DeleteProfileModal
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        className={"absolute top-1/4 left-0 "}
      />
    </>
  );
};

export default EditProfile;
