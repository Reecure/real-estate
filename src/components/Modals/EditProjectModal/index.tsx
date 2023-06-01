import React, { FC, useEffect } from "react";

import GradientButton from "@/components/UI/Buttons/GradientButton";
import { CSSTransition } from "react-transition-group";
import { Project } from "@/types";
import { useAppDispatch } from "@/redux/app/hooks";

import { fetchUser } from "@/redux/features/getUserByIdSlice";
import BlackButton from "@/components/UI/Buttons/BlackButton";
import { ProjectTypes } from "@/constants/projectTypes";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
  item: Project;
};

const projectOptions = [
  ProjectTypes.Penthouse,
  ProjectTypes.Townhouse,
  ProjectTypes.Apartment,
];

const EditProjectModal: FC<Props> = ({ isOpen, setIsOpen, item }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser(item.owner));
  }, [dispatch, item.owner]);

  return (
    <CSSTransition in={isOpen} timeout={300}>
      <dialog
        open
        className={
          "max-w-[560px] absolute top-1/4 left-0 p-10 rounded-[24px] shadow-xl shadow-white/30 text-white bg-[#0A0A0A] z-50"
        }
      >
        <div className="flex justify-between items-center mb-10">
          <h4 className="text-4xl">Edit Project</h4>
          <button onClick={setIsOpen}>x</button>
        </div>
        <div className=" mb-10">
          <label htmlFor="" className={`uppercase text-[9px] tracking-[2px]`}>
            Name
          </label>
          <input
            type="text"
            className={`custom-field`}
            placeholder={item.name}
          />
          <label htmlFor="" className={`uppercase text-[9px] tracking-[2px]`}>
            Type
          </label>
          <select name="" id="" className={`custom-field`}>
            {projectOptions.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-end space-x-6">
          <BlackButton className={`uppercase`}>Delete</BlackButton>
          <BlackButton className={`uppercase`}>Suspend</BlackButton>
          <BlackButton className={`uppercase`}>Export</BlackButton>
          <GradientButton className={`uppercase`}>Save</GradientButton>
        </div>
      </dialog>
    </CSSTransition>
  );
};

export default EditProjectModal;
