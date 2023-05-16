import React from "react";
import MessangerComp from "@/components/MessangerComp";
import Navbar from "@/components/Navbar";

const Messanger = () => {
  return (
    <>
      <Navbar />
      <div className={`py-32 custom-padding`}>
        <MessangerComp />
      </div>
    </>
  );
};

export default Messanger;
