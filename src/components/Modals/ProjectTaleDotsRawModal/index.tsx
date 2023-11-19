import React, { FC } from "react";
import { BsBox2 } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { CSSTransition } from "react-transition-group";

type Props = {
  isOpen: boolean;
};

const ProjectTaleDotsRawModal: FC<Props> = ({ isOpen }) => {
  return (
    <CSSTransition in={isOpen} timeout={300}>
      <dialog
        open
        className={`px-4  max-w-[180px] py-2 bg-primary-dark-gray space-y-1 rounded-lg border-[1px] border-white `}
      >
        <div className={`text-white text-[9px] flex items-center space-x-2`}>
          <p className={"cursor-pointer"}>Delete</p>
        </div>
      </dialog>
    </CSSTransition>
  );
};

export default ProjectTaleDotsRawModal;
