import React, { FC, useState } from "react";
import BlackButton from "../../UI/Buttons/BlackButton";
import GradientButton from "../../UI/Buttons/GradientButton";
import RedButton from "../../UI/Buttons/RedButton";
import s from "@/components/Modals/ModalsTransition.module.css";
import { CSSTransition } from "react-transition-group";

type Props = {
  deleteOpen: boolean;
  setDeleteOpen: (arg: boolean) => void;
  className?: string;
};

const DeleteProfileModal: FC<Props> = ({
  deleteOpen,
  setDeleteOpen,
  className,
}) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <CSSTransition
      in={deleteOpen}
      classNames={{
        enterActive: s.modalActive,
        exitActive: s.modalExit,
      }}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <dialog
        open
        className={`${className} max-w-[559px] p-10 rounded-[24px] shadow-xl shadow-white/30 text-white bg-[#0A0A0A] z-[100]`}
      >
        <div className="flex mb-5 sm:mb-10">
          <div className="w-full">
            <h4 className="text-xl text-[36px]">Delete Account</h4>
          </div>
          <div className="">
            <button className="text-xl" onClick={() => setDeleteOpen(false)}>
              x
            </button>
          </div>
        </div>

        <p className="mb-6">
          This action can not be undone. We highly recommend to export your
          account
        </p>
        <div className="mb-10 space-x-3">
          <input
            type="checkbox"
            onChange={(e) => {
              setConfirmDelete(e.currentTarget.checked);
            }}
          />
          <label htmlFor="">Confirm account deletion</label>
        </div>
        <div className="flex justify-between space-x-2 sm:space-x-0 ">
          <RedButton
            disabled={!confirmDelete}
            onClick={() => {
              alert("Account success deleted");
            }}
            className="!whitespace-nowrap bg-red-400 disabled:bg-red-400/25 disabled:text-white/25"
          >
            Delete account
          </RedButton>
          <div className="flex flex-col items-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5">
            <BlackButton
              onClick={() => {
                setDeleteOpen(!deleteOpen);
              }}
              className=""
            >
              Cancel
            </BlackButton>
            <GradientButton className="">Export</GradientButton>
          </div>
        </div>
      </dialog>
    </CSSTransition>
  );
};

export default DeleteProfileModal;
