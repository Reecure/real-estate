import React, { FC, useEffect } from "react";
import BlueButton from "@/components/UI/Buttons/BlueButton";
import GradientButton from "@/components/UI/Buttons/GradientButton";
import { CSSTransition } from "react-transition-group";
import { Project, User } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";

import { fetchUser, selectUser } from "@/redux/features/getUserByIdSlice";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
  item: Project;
};
const EditProjectModal: FC<Props> = ({ isOpen, setIsOpen, item }) => {
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser(item.owner));
  }, [dispatch]);

  return (
    <CSSTransition in={isOpen} timeout={300}>
      <dialog
        open
        className={
          "max-w-[560px] absolute top-1/4 left-0 p-10 rounded-[24px] shadow-xl shadow-white/30 text-white bg-[#0A0A0A] z-50"
        }
      >
        <div className="flex justify-between items-center mb-10">
          <h4 className="text-4xl">Export Project</h4>
          <button onClick={setIsOpen}>x</button>
        </div>
        <div className=" mb-10">
          <div className="">
            <p>
              You want to export project “{item.neighbourhood}” by{" "}
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div className="flex flex-col w-full justify-center ">
            <label htmlFor="fileName" className="mb-1 text-[12px]">
              File Name
            </label>
            <input
              type="text"
              className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
            />
            <label htmlFor="projectsFormat" className="mb-1 text-[12px]">
              Projects Format
            </label>
            <input
              type="text"
              className="w-full py-3 px-2 mb-6 bg-[#0E0E0E] rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-6">
          <BlueButton>Cancel</BlueButton>
          <GradientButton>Export</GradientButton>
        </div>
      </dialog>
    </CSSTransition>
  );
};

export default EditProjectModal;
