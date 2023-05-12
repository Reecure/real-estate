import { Project } from "@/types";
import React, { FC } from "react";
import Container from "../UI/Container";
import MessageToUserCard from "./MessageToUserCard";
import ProjectDescription from "./ProductDescription";

import SwiperProjectPage from "./SwiperProjectPage";

type Props = {
  apart: Project;
};

const AppartamentPage: FC<Props> = ({ apart }) => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-12">
      <div className="max-w-[880px] ">
        <SwiperProjectPage />
        <ProjectDescription apart={apart} />
      </div>
      <div className="flex justify-center">
        <MessageToUserCard apart={apart} />
      </div>
    </Container>
  );
};

export default AppartamentPage;
