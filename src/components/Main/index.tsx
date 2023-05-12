import React from "react";
import AboutUs from "./AboutUs";
import Appartaments from "./Appartaments";
import DidYouFindYourDreamHome from "./DidYouFindYourDreamHome";
import Hero from "./Hero";
import OtherProjects from "./OtherProjects";
import { useSpring, animated } from "@react-spring/web";
import ObserverSection from "./ObserverSection";

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      <ObserverSection>
        <Hero />
      </ObserverSection>
      <ObserverSection>
        <Appartaments />
      </ObserverSection>
      <ObserverSection>
        <AboutUs />
      </ObserverSection>
      <ObserverSection>
        <OtherProjects />
      </ObserverSection>
      <ObserverSection>
        <DidYouFindYourDreamHome />
      </ObserverSection>
    </>
  );
};

export default Main;
