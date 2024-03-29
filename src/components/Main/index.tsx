import React from "react";
import AboutUs from "./AboutUs";
import Apartments from "./Appartaments";
import DidYouFindYourDreamHome from "./DidYouFindYourDreamHome";
import Hero from "./Hero";
import ObserverSection from "./ObserverSection";


type Props = {};

const Main = (props: Props) => {
	return (
		<>
			<ObserverSection>
				<Hero />
			</ObserverSection>
			<ObserverSection>
				<Apartments />
			</ObserverSection>
			<ObserverSection>
				<AboutUs />
			</ObserverSection>
			<ObserverSection>
				<DidYouFindYourDreamHome />
			</ObserverSection>
		</>
	);
};

export default Main;
