import React from "react";
import BlueButton from "../UI/Buttons/BlueButton";
import GradientButton from "../UI/Buttons/GradientButton";

type Props = {};

const DeleteProfileModal = (props: Props) => {
  return (
    <div className="max-w-[559px] p-10 rounded-[24px] shadow-xl shadow-white/30 text-white bg-[##0A0A0A]">
      <h4>Delete Account</h4>
      <p>
        This action can not be undone. We highly recommend to export your
        account
      </p>
      <div>
        <input type="checkbox" />
        <label htmlFor="">Confirm account deletion</label>
      </div>
      <div className="flex justify-between">
        <BlueButton className="bg-red-400 ">Delete account</BlueButton>
        <BlueButton className="bg-primary-dark-gray ">Cancel</BlueButton>
        <GradientButton>Export</GradientButton>
      </div>
    </div>
  );
};

export default DeleteProfileModal;
