import React from "react";
import OtherProjectsSwiper from "./OtherProjectsSwiper";

type Props = {};

const OtherProjects = (props: Props) => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h4 className="text-3xl text-primary-blue">Other Projects</h4>
        <p>Other projects by us in different locations </p>
      </div>
      <div className="h-[500px] mt-8">
        <OtherProjectsSwiper />
      </div>
    </div>
  );
};

export default OtherProjects;
