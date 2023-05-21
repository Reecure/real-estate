import React from "react";
import AboutUsPage from "@/components/AboutUsPage";
import Navbar from "@/components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className={`custom-padding py-32`}>
        <AboutUsPage />
      </div>
    </div>
  );
};

export default AboutUs;
