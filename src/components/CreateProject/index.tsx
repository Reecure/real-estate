import React from "react";
import BlackButton from "../UI/Buttons/BlackButton";
import GradientButton from "../UI/Buttons/GradientButton";
import Container from "../UI/Container";
import AdditionalDetail from "./MainForm/AdditionalDetail";
import MainForm from "./MainForm";
import Link from "next/link";

type Props = {};

const CreateProject = (props: Props) => {
  return (
    <Container className="text-white custom-padding">
      <div className="flex justify-between py-16">
        <h5 className="text-4xl font-semibold">New Project</h5>
        <div className="space-x-3">
          <BlackButton
            onClick={() => history.back()}
            className="rounded-[50px]"
          >
            Back
          </BlackButton>
          <GradientButton className="rounded-[50px]">Create</GradientButton>
        </div>
      </div>
      <div>
        <MainForm />
      </div>
    </Container>
  );
};

export default CreateProject;
